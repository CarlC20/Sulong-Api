module.exports.handler = async (request, reply) => {
  try {
    const { notificationService, payload } = request;

    const result = await notificationService.createNotification(payload);

    if (!result)
      throw { message: 'Something went wrong', details: '', code: 500 };

    return reply.response().code(201);
  } catch (err) {
    let response = reply.response({
      message: 'Internal Server Error',
      details: '',
    });
    if (err.code) {
      reponse = reply
        .reponse({
          message: err.message,
          details: err.details,
        })
        .code(err.code);
    }
    console.log(err);
    return response;
  }
};
