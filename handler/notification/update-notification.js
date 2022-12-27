module.exports.handler = async (request, reply) => {
  try {
    const { notificationService, payload } = request;
    const notifId = request.params.notifId;

    const result = await notificationService.updateNotification(
      notifId,
      payload
    );

    if (!result)
      throw { message: 'Something went wrong', details: '', code: 500 };

    return reply.response().code(204);
  } catch (err) {
    let response = reply.response({
      message: 'Internal Server Error',
      details: '',
    });
    if (err.code) {
      response = reply
        .response({ message: err.message, details: err.details })
        .code(err.code);
    }
    return response;
  }
};
