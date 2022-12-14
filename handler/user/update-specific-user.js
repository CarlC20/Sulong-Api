module.exports.handler = async (request, reply) => {
  try {
    const { userService, payload, md5 } = request;
    const userId = request.params.userId;
    if (payload.password) payload.password = md5(payload.password);

    await userService.updateProfile(userId, payload);

    return reply.response().code(204);
  } catch (err) {
    let response = reply.response({
      message: `Internal Server Error`,
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
