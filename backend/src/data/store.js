const fs = require('fs');
const path = require('path');
const db = require('../../database');

const DATA_FILE = path.join(__dirname, 'data.json');

function loadInitialState() {
    try {
        if (fs.existsSync(DATA_FILE)) {
            const data = fs.readFileSync(DATA_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading data from file:', error);
    }
    
    // Fallback to database.js
    return {
        users: [...db.users],
        products: [...db.products],
        orders: [],
        carts: {},
        reviews: [...db.initialReviews],
        notifications: []
    };
}

const state = loadInitialState();

function saveState() {
    try {
        fs.writeFileSync(DATA_FILE, JSON.stringify(state, null, 2), 'utf8');
    } catch (error) {
        console.error('Error saving data to file:', error);
    }
}

// Auto-save every 30 seconds if changes occur
setInterval(saveState, 30000);

// Also save on exit
process.on('SIGINT', () => {
    saveState();
    process.exit();
});

module.exports = {
    ...state,
    saveState
};
