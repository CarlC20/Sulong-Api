module.exports.handler = async (request, reply) => {
  try {
    const { notificationService } = request;

    const result = await notificationService.getAllNotification();

    if (!result)
      throw { message: 'Something went wrong', details: '', code: 500 };

    return reply.response(result).code(201);
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
