module.exports.handler = async (request, reply) => {
  try {
    const { userService, payload } = request;
    const userId = request.params.userId;

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
    console.log(err);
    return response;
  }
};
