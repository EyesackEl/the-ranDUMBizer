const db = require('../config/connection');
const { User, List } = require('../models');
const userSeeds = require('./userSeeds.json');
const listSeeds = require('./listSeeds.json');

db.once('open', async () => {
  await User.deleteMany({});
  await User.create(userSeeds);

  await List.deleteMany({});
  await List.create(listSeeds);

  console.log('all done!');
  process.exit(0);
});
