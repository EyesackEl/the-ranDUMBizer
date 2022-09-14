const db = require('../config/connection');
const { User, List } = require('../models');
const userSeeds = require('./userSeeds.json');
const listSeeds = require('./listSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await List.deleteMany({});

    await User.create(userSeeds);
    await List.create(listSeeds);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  console.log('all done!');
  process.exit(0);
});
