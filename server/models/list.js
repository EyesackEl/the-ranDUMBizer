const { Schema, model } = require('mongoose');

const listSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    public: true
  },
  listItems: [
    {
      type: String,
      trim: true,
    },
  ]
});

const List = model('List', listSchema);

module.exports = List;
