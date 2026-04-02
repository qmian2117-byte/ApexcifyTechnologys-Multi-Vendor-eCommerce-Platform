function getCategories(req, res) {
    const categories = [
        { id: 1, name: 'Electronics', icon: 'fa-laptop', count: 234 },
        { id: 2, name: 'Fashion', icon: 'fa-tshirt', count: 567 },
        { id: 3, name: 'Home & Living', icon: 'fa-couch', count: 189 },
        { id: 4, name: 'Beauty', icon: 'fa-spray-can', count: 345 },
        { id: 5, name: 'Sports', icon: 'fa-dumbbell', count: 123 },
        { id: 6, name: 'Books', icon: 'fa-book', count: 456 },
        { id: 7, name: 'Toys', icon: 'fa-gamepad', count: 278 }
    ];

    return res.json({ success: true, categories });
}

module.exports = {
    getCategories
};
