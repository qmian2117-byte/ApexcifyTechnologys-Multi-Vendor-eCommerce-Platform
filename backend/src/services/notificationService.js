const state = require('../data/store');

function createOrderEvent(status, note) {
    return {
        status,
        note,
        timestamp: new Date()
    };
}

function sendOrderNotification(order, eventType, note) {
    const shippingEmail = order.shippingAddress?.email;
    const shippingPhone = order.shippingAddress?.phone;
    const message = eventType === 'placed'
        ? `Your order ${order.orderNumber} has been placed successfully.`
        : `Your order ${order.orderNumber} is now ${order.status.replaceAll('_', ' ')}.`;

    const notification = {
        id: state.notifications.length + 1,
        userId: order.userId,
        orderId: order.id,
        orderNumber: order.orderNumber,
        type: eventType,
        message: note ? `${message} ${note}` : message,
        channels: {
            email: Boolean(shippingEmail),
            sms: Boolean(shippingPhone)
        },
        createdAt: new Date()
    };

    state.notifications.push(notification);

    console.log(`[Notification] ${notification.message}`);
    if (shippingEmail) {
        console.log(`[Email] To: ${shippingEmail}`);
    }
    if (shippingPhone) {
        console.log(`[SMS] To: ${shippingPhone}`);
    }

    return notification;
}

module.exports = {
    createOrderEvent,
    sendOrderNotification
};
