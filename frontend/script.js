/**
 * MarketHub - Core Application Logic (Simplified Edition)
 */

const MarketHub = {
    init: function() {
        this.checkAuth();
        this.updateCartCount();
        this.setupEventListeners();
    },

    checkAuth: function() {
        const user = MarketHubAPI.auth.getUser();
        const authContainer = document.getElementById('auth-container');
        const userContainer = document.getElementById('user-container');
        const displayName = document.getElementById('user-display-name');
        const avatarInitial = document.getElementById('user-avatar-initial');

        if (user && user.token) {
            if (authContainer) authContainer.classList.add('hidden');
            if (userContainer) userContainer.classList.remove('hidden');
            if (displayName) displayName.innerText = user.name;
            if (avatarInitial) avatarInitial.innerText = user.name.charAt(0).toUpperCase();
        } else {
            if (authContainer) authContainer.classList.remove('hidden');
            if (userContainer) userContainer.classList.add('hidden');
        }
    },

    cart: {
        add: function(product, qty = 1) {
            const user = MarketHubAPI.auth.getUser();
            if (!user) {
                showToast("Please log in to add items", "warning");
                setTimeout(() => window.location.href = 'login.html', 1500);
                return;
            }
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            const index = cart.findIndex(item => item._id === product._id);
            
            if (index > -1) {
                cart[index].quantity += parseInt(qty);
            } else {
                cart.push({
                    _id: product._id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    category: product.category,
                    quantity: parseInt(qty)
                });
            }
            
            localStorage.setItem('cart', JSON.stringify(cart));
            MarketHub.updateCartCount();
            showToast(`Added ${product.name} to cart`, 'success');
        },

        remove: function(id) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
            cart = cart.filter(item => item._id !== id);
            localStorage.setItem('cart', JSON.stringify(cart));
            MarketHub.updateCartCount();
        }
    },

    wishlist: {
        toggle: function(id) {
            let list = JSON.parse(localStorage.getItem('wishlist')) || [];
            const idx = list.indexOf(id);
            if (idx > -1) {
                list.splice(idx, 1);
                showToast("Removed from wishlist", "info");
            } else {
                list.push(id);
                showToast("Added to wishlist", "success");
            }
            localStorage.setItem('wishlist', JSON.stringify(list));
        }
    },

    updateCartCount: function() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const badges = document.querySelectorAll('.cart-count');
        badges.forEach(b => {
            if (count > 0) {
                b.innerText = count;
                b.classList.remove('hidden');
            } else {
                b.classList.add('hidden');
            }
        });
    },

    setupEventListeners: function() {
        // Simple search redirect
        const searchInput = document.getElementById('global-search');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    window.location.href = `products.html?search=${encodeURIComponent(searchInput.value)}`;
                }
            });
        }
    }
};

/**
 * Global Notifications (Simplified)
 */
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `fixed bottom-6 right-6 px-6 py-3 rounded-lg shadow-xl text-white font-bold text-sm z-[200] transition-all duration-500 transform translate-y-20`;
    
    const colors = {
        success: 'bg-emerald-500',
        error: 'bg-rose-500',
        info: 'bg-blue-500',
        warning: 'bg-amber-500'
    };
    
    toast.classList.add(colors[type] || colors.success);
    toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'} mr-2"></i> ${message}`;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.remove('translate-y-20');
        toast.classList.add('translate-y-0');
    }, 10);

    setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-4');
        setTimeout(() => toast.remove(), 500);
    }, 3000);
}

// Global Init
document.addEventListener('DOMContentLoaded', () => MarketHub.init());
