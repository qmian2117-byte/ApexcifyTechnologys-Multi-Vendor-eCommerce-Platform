const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/constants');

function parseAuthToken(req) {
    const authHeader = req.headers.authorization || '';
    if (!authHeader.startsWith('Bearer ')) return null;
    const token = authHeader.split(' ')[1];
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

const optionalAuth = (req, res, next) => {
    req.user = parseAuthToken(req);
    next();
};

const requireAuth = (req, res, next) => {
    req.user = parseAuthToken(req);
    if (!req.user) {
        return res.status(401).json({ success: false, message: 'Authentication required' });
    }
    next();
};

const requireRole = (...roles) => (req, res, next) => {
    req.user = parseAuthToken(req);
    if (!req.user) {
        return res.status(401).json({ success: false, message: 'Authentication required' });
    }
    if (!roles.includes(req.user.role)) {
        return res.status(403).json({ success: false, message: 'Access denied' });
    }
    next();
};

const requireAdmin = (req, res, next) => {
    req.user = parseAuthToken(req);
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ success: false, message: 'Admin access required' });
    }
    next();
};

module.exports = { optionalAuth, requireAuth, requireRole, requireAdmin };
