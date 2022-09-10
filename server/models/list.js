const { Schema } = require('mongoose');

const listSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  listItems: [
    {
      type: String,
      trim: true,
    },
  ],
});

// const List = model('List', listSchema);

module.exports = listSchema;
