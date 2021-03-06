const mongoose = require("mongoose");

const UsersSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  hash: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    requires: true,
  },
  servers: [
    {
      user: {
        type: String,
      },
      serverName: {
        type: String,
      },
      ipAddr: {
        type: String,
      },
      sshKey: {
        type: Boolean,
      },
      password: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Users", UsersSchema);
