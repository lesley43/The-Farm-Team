const { Type } = require("./models/type");
const { Crop } = require("./models/crop");
const mongoose = require("mongoose");
const config = require("config");

const data = [
    {
      name: "Vegetable",
      crops: [
        { name: "Beets", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Biennial" },
        { name: "Cardoon", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Annual" },
        { name: "Carrots", plantSeason: "Fall", harvestSeason: "Winter", lifeCycle: "Annual" },
        { name: "Cauliflower", plantSeason: "Fall", harvestSeason: "Fall", lifeCycle: "Annual" },
        { name: "Chard", plantSeason: "Fall", harvestSeason: "Fall", lifeCycle: "Annual" },
        { name: "Chickpea", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Annual" },
        { name: "Collards", plantSeason: "Summer", harvestSeason: "Fall", lifeCycle: "Annual" },
        { name: "Corn", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Annual" },
        { name: "Cucumber", plantSeason: "Spring", harvestSeason: "Spring", lifeCycle: "Annual" },
        { name: "Eggplant", plantSeason: "Spring", harvestSeason: "Fall", lifeCycle: "Perennial" },
        { name: "Fava Bean", plantSeason: "Fall", harvestSeason: "Winter", lifeCycle: "Annual" },
        { name: "Garlic", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Perennial" },
        { name: "Horseradish", plantSeason: "Spring", harvestSeason: "Fall", lifeCycle: "Perennial" },
        { name: "Kale", plantSeason: "Summer", harvestSeason: "Winter", lifeCycle: "Biennial" },
        { name: "Leek", plantSeason: "Spring", harvestSeason: "Fall", lifeCycle: "Annual" },
        { name: "Lettuce", plantSeason: "Fall", harvestSeason: "Winter", lifeCycle: "Annual" },
        { name: "Lima Bean", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Annual" },
        { name: "Cantaloupe", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Annual" },
        { name: "Mustard Greens", plantSeason: "Spring", harvestSeason: "Spring", lifeCycle: "Perennial" },

        { name: "New Zealand Spinach", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Perennial" }
      ]
    },
    {
      name: "Fruit",
      crops: [
        { name: "Peach", plantSeason: "Winter", harvestSeason: "Summer", lifeCycle: "Annual" },
        { name: "Avocado", plantSeason: "Spring", harvestSeason: "Spring", lifeCycle: "Perennial" },
        { name: "Fig", plantSeason: "Spring", harvestSeason: "Fall", lifeCycle: "Perennial" },
        { name: "Mulberry", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Perennial" }
      ]
    },
    {
      name: "Herb",
      crops: [
        { name: "Cilantro", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Annual" },
        { name: "Parsley", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Biennial" },
        { name: "Tarragon", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Perennial" },
        { name: "Thyme", plantSeason: "Spring", harvestSeason: "Summer", lifeCycle: "Perennial" }
      ]
    }
  ];

  async function seed() {
    await mongoose.connect(config.get("db"));

    await Crop.deleteMany({});
    await Type.deleteMany({});

    for (let type of data) {
      const { _id: typeId } = await new Type({ name: type.name }).save();
      const crops = type.crops.map(crop => ({
        ...crop,
        type: { _id: typeId, name: type.name }
      }));
      await Crop.insertMany(crops);
    }

    mongoose.disconnect();

    console.info("Done!");
  }

  seed();
