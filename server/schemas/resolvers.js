const { AuthenticationError } = require('apollo-server-express');
const { User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, { _id }) => {
      return User.findOne({ _id });
    },
  },

  Mutation: {
    //* didn't quite finish this one
    // addList: async (parent, { userId, listItems }) => {
    //   const user = User.findOneAndUpdate(
    //     { _id: userId },
    //     {
    //       $addToSet: {
    //         lists: {},
    //       },
    //     },
    //     {
    //       new: true,
    //     }
    //   );

    //   return user;
    // },
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