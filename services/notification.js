const { Notification } = require('../models/model-schema');

/** Create notification */
const createNotification = async (payload) => {
  return await Notification.create(payload);
};

/** Get all notifications */
const getAllNotification = async () => {
  return await Notification.findAll({
    attributes: [
      'id',
      'name',
      'email',
      'type',
      'status',
      'description',
      'receiver',
      'condition',
      'createdAt',
    ],
  });
};

/** Get specific notification by ID */
const getSpecificNotification = async (id) => {
  return await Notification.findOne({
    attributes: [
      'id',
      'name',
      'email',
      'type',
      'status',
      'description',
      'receiver',
      'condition',
      'createdAt',
    ],
    where: {
      id: id,
    },
  });
};

/** Update specific notification */
const updateNotification = async (id, payload) => {
  return Notification.update(payload, {
    where: {
      id: id,
    },
  });
};

/** Update all notification */
const updateAllNotification = async (email) => {
  return Notification.update(
    { status: 'Read' },
    {
      where: {
        email: email,
      },
    }
  );
};

module.exports = {
  createNotification,
  getAllNotification,
  getSpecificNotification,
  updateNotification,
  updateAllNotification,
};
