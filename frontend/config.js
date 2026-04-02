// API configuration
const CONFIG = {
    API_URL: window.location.origin.includes('localhost') ? 'http://localhost:5000/api' : '/api',
    BASE_API_URL: window.location.origin.includes('localhost') ? 'http://localhost:5000' : ''
};

window.API_CONFIG = CONFIG;
