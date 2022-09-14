const { Schema, model } = require('mongoose');

const listSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  public: {
    type: Boolean,
  },
  listItems: [
    {
      type: String,
      trim: true,
    },
  ],
  user: {
    type: String
  },
});

const List = model('List', listSchema);

module.exports = List;
