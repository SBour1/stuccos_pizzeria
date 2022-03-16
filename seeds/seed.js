const sequelize = require('../config/connection');
const seedCategory = require('./categoryData');
const seedmenuItems = require('./menuItemsData');
const Dessert = require('../models/Dessert');
const Pizza = require('../models/Pizza');

const seedApetizer = require('./apetizerData');
// const seedPizza = require('./pizzaData');
const pizzaData = require('./pizzaData.json');
// const seedDessert = require('./dessertData');
const dessertData = require('./dessertData.json');



const seedAll = async () => {
  await sequelize.sync({ force: true });

  await user.bulkCreate(userData, {});

  await seedCategory();

  await seedmenuItems();

 
  await seedApetizer();

  // await seedPizza();
  // await seedDessert();

  
  await Dessert.bulkCreate(dessertData, {
    individualHooks: true,
    returning: true,
  });


  await Pizza.bulkCreate(pizzaData, {
    individualHooks: true,
    returning: true,
  });


  process.exit(0);
};

seedAll();
