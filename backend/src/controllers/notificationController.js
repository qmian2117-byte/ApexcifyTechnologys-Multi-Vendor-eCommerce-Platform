const state = require('../data/store');

function getNotificationsByUser(req, res) {
    const requestedUserId = Number(req.params.userId);

    if (req.user.role !== 'admin' && Number(req.user.id) !== requestedUserId) {
        return res.status(403).json({ success: false, message: 'You can only access your own notifications' });
    }

    const userNotifications = state.notifications.filter((item) => Number(item.userId) === requestedUserId);
    return res.json({ success: true, notifications: userNotifications });
}

module.exports = {
    getNotificationsByUser
};
