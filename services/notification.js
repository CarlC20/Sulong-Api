const { Notification } = require('../models/model-schema');

/** Create notification */
const createNotification = async (payload) => {
  return await Notification.create(payload);
};

/** Get all notifications */
const getAllNotification = async () => {
  return await Notification.findAll({
    attributes: ['id', 'name', 'type', 'status', 'description', 'createdAt'],
  });
};

/** Get specific notification by ID */
const getSpecificNotification = async (id) => {
  return await Notification.findOne({
    attributes: ['id', 'name', 'type', 'status', 'description', 'createdAt'],
    where: {
      id: id,
    },
  });
};

/** Update notification */
const updateNotification = async (id, payload) => {
  return Notification.update(payload, {
    where: {
      id: id,
    },
  });
};

module.exports = {
  createNotification,
  getAllNotification,
  getSpecificNotification,
  updateNotification,
};
