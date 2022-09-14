const { AuthenticationError } = require('apollo-server-express');
const { User, List } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },
    me: async (parent, { _id }) => {
      return User.findOne({ _id }).populate('lists');
    },
    lists: async (parent, { user }) => {
      const params = user ? { user } : {};
      return List.find(params);
    },
    list: async (parent, { listId }) => {
      return List.findOne({ _id: listId });
    },
  },

  Mutation: {
    //* didn't quite finish this one
    addList: async (parent, { name, listItems }, context) => {
      if (context.user) {
        const list = await List.create({
          name,
          user: context.user._id,
          listItems,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { lists: list._id } }
        );

        return list;
      }
      throw new AuthenticationError('You need to be logged in!');
    },

    addUser: async (parent, { username, password }) => {
      const user = await User.create({ username, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });

      if (!user) {
        throw new AuthenticationError(
          'No user found with this username address'
        );
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
