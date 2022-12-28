module.exports.handler = async (request, reply) => {
  try {
    const { notificationService, payload } = request;
    const email = payload.email;

    const result = await notificationService.updateAllNotification(email);

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

    console.log(err);

    return response;
  }
};
