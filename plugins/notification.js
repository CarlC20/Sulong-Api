/** Notification Handlers */
const createNotification =
  require('../handler/notification/create-notification').handler;
const getNotification =
  require('../handler/notification/get-notification').handler;
const getSpecificNotification =
  require('../handler/notification/get-specific-notification').handler;
const updateNotification =
  require('../handler/notification/update-notification').handler;

/** Middleware */
const validateApiKey = require('../middleware/api/validate-api-key');
const validateUserToken = require('../middleware/token/validate-user-token');

const notificationService = require('../services/notification');

module.exports = {
  name: 'notification-plugin',
  register: async (server) => {
    server.decorate('request', 'notificationService', notificationService);

    /** Create notification */
    server.route({
      method: 'POST',
      path: '/api/notifications/create',
      options: {
        pre: [
          {
            method: validateApiKey,
          },
          {
            method: validateUserToken,
            assign: 'u',
          },
        ],
        handler: createNotification,
      },
    });

    /** Get all notification */
    server.route({
      method: 'GET',
      path: '/api/notifications/all',
      options: {
        pre: [
          {
            method: validateApiKey,
          },
          {
            method: validateUserToken,
            assign: 'u',
          },
        ],
        handler: getNotification,
      },
    });

    /** Get notification by ID */
    server.route({
      method: 'GET',
      path: '/api/notifications/{notifId}',
      options: {
        pre: [
          {
            method: validateApiKey,
          },
          {
            method: validateUserToken,
            assign: 'u',
          },
        ],
        handler: getSpecificNotification,
      },
    });

    /** Update notification */
    server.route({
      method: 'PUT',
      path: '/api/notifications/update/{roleId}',
      options: {
        pre: [
          {
            method: validateApiKey,
          },
          {
            method: validateUserToken,
            assign: 'u',
          },
        ],
        handler: updateNotification,
      },
    });
  },
};
