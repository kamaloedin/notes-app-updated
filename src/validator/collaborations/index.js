const InvariantError = require('../../exceptions/InvariantError');
const collaborationPayloadSchema = require('./schema');

const CollaborationValidator = {
  validateCollaborationPayload: (payload) => {
    const validationResult = collaborationPayloadSchema.validate(payload);

    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = CollaborationValidator;
