/**
 * MarketHub API Service
 * Handles all communication with the backend
 */

const API_BASE_URL = window.API_CONFIG ? window.API_CONFIG.API_URL : (window.location.origin.includes('localhost') ? 'http://localhost:5000/api' : '/api');

const api = {
    // Helper for fetch with auth
    async request(endpoint, options = {}) {
        const token = localStorage.getItem('token');
        const headers = {
            'Content-Type': 'application/json',
            ...(token && { 'Authorization': `Bearer ${token}` }),
            ...options.headers
        };

        try {
            const response = await fetch(`${API_BASE_URL}${endpoint}`, {
                ...options,
                headers
            });

            const data = await response.json();

            if (!response.ok) {
                // Handle token expiration
                if (response.status === 401 && token) {
                    localStorage.removeItem('token');
                    localStorage.removeItem('user');
                    window.location.href = 'login.html';
                }
                throw new Error(data.message || 'Something went wrong');
            }

            return data;
        } catch (error) {
            console.error(`API Error (${endpoint}):`, error);
            throw error;
        }
    },

    // Auth
    auth: {
        async login(email, password) {
            const data = await api.request('/auth/login', {
                method: 'POST',
                body: JSON.stringify({ email, password })
            });
            if (data.token) localStorage.setItem('token', data.token);
            if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
            return data;
        },
        async register(userData) {
            const data = await api.request('/auth/register', {
                method: 'POST',
                body: JSON.stringify(userData)
            });
            if (data.token) localStorage.setItem('token', data.token);
            if (data.user) localStorage.setItem('user', JSON.stringify(data.user));
            return data;
        },
        async getProfile() {
            return api.request('/auth/profile');
        },
        getUser() {
            const user = localStorage.getItem('user');
            const token = localStorage.getItem('token');
            if (!user || !token) return null;
            try {
                const userData = JSON.parse(user);
                return { ...userData, token };
            } catch (e) { return null; }
        },
        logout() {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        }
    },

    // Products
    products: {
        async getAll(params = {}) {
            const query = new URLSearchParams(params).toString();
            return api.request(`/products?${query}`);
        },
        async getFeatured() {
            return api.request('/products/featured/list');
        },
        async getById(id) {
            return api.request(`/products/${id}`);
        },
        async getCategories() {
            return api.request('/products/categories');
        }
    },

    // Reviews
    reviews: {
        async getByProduct(productId) {
            return api.request(`/products/${productId}/reviews`);
        },
        async add(productId, reviewData) {
            return api.request(`/products/${productId}/reviews`, {
                method: 'POST',
                body: JSON.stringify(reviewData)
            });
        },
        async markHelpful(reviewId) {
            return api.request(`/products/${reviewId}/helpful`, {
                method: 'POST'
            });
        }
    },

    // Orders
    orders: {
        async create(orderData) {
            return api.request('/orders', {
                method: 'POST',
                body: JSON.stringify(orderData)
            });
        },
        async getMyOrders() {
            return api.request('/orders/my-orders');
        },
        async getById(id) {
            return api.request(`/orders/${id}`);
        },
        async track(orderRef, email) {
            return api.request(`/orders/track/${orderRef}?email=${encodeURIComponent(email || '')}`);
        },
        async cancel(orderId) {
            return api.request(`/orders/${orderId}/cancel`, {
                method: 'PATCH'
            });
        }
    },

    // Coupons
    coupons: {
        async validate(code) {
            return api.request('/coupons/validate', {
                method: 'POST',
                body: JSON.stringify({ code })
            });
        }
    }
};

window.MarketHubAPI = api;
