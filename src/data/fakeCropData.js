import * as typesAPI from "./fakeTypeData";

const crops = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Cilantro",
    cropType: { _id: "5b21ca3eeb7f6fbccd471816", name: "Herb"},
    plantSeason: "Spring",
    harvestSeason: "Summer",
    lifeCycle: "Annual",
    liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Cabbage",
    cropType: { _id: "5b21ca3eeb7f6fbccd471818", name: "Vegetable"},
    plantSeason: "Winter",
    harvestSeason: "Spring",
    lifeCycle: "Biennial"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Peach",
    cropType: { _id: "5b21ca3eeb7f6fbccd471814", name: "Fruit" },
    plantSeason: "Winter",
    harvestSeason: "Summer",
    lifeCycle: "Annual"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    name: "Parsley",
    cropType: { _id: "5b21ca3eeb7f6fbccd471816", name: "Herb" },
    plantSeason: "Spring",
    harvestSeason: "Summer",
    lifeCycle: "Biennial"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Celery",
    cropType: { _id: "5b21ca3eeb7f6fbccd471818", name: "Vegetable" },
    plantSeason: "Summer",
    harvestSeason: "Fall",
    lifeCycle: "Biennial"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    name: "Broccoli",
    cropType: { _id: "5b21ca3eeb7f6fbccd471818", name: "Vegetable" },
    plantSeason:"Fall",
    harvestSeason: "Winter",
    lifeCycle: "Annual"

  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "Turnip",
    cropType: { _id: "5b21ca3eeb7f6fbccd471818", name: "Vegetable" },
    plantSeason: "Winter",
    harvestSeason: "Spring",
    lifeCycle: "Biennial"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471822",
    name: "Avocado",
    cropType: { _id: "5b21ca3eeb7f6fbccd471814", name: "Fruit" },
    plantSeason: "Spring",
    harvestSeason: "Spring",
    lifeCycle: "Perennial"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471823",
    name: "Fig",
    cropType: { _id: "5b21ca3eeb7f6fbccd471814", name: "Fruit" },
    plantSeason: "Spring",
    harvestSeason: "Fall",
    lifeCycle: "Perennial"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471824",
    name: "Mulberry",
    cropType: { _id: "5b21ca3eeb7f6fbccd471814", name: "Fruit" },
    plantSeason: "Spring",
    harvestSeason: "Summer",
    lifeCycle: "Perennial"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471825",
    name: "Tarragon",
    cropType: { _id: "5b21ca3eeb7f6fbccd471816", name: "Herb" },
    plantSeason: "Spring",
    harvestSeason: "Summer",
    lifeCycle: "Perennial"
  },
  {
    _id: "5b21ca3eeb7f6fbccd471826",
    name: "Thyme",
    cropType: { _id: "5b21ca3eeb7f6fbccd471816", name: "Herb" },
    plantSeason: "Spring",
    harvestSeason: "Summer",
    lifeCycle: "Perennial"
  }
];

export function getCrops() {
  return crops;
}

export function getCrop(id) {
  return crops.find(c => c._id === id);
}

export function saveCrop(crop) {
  let cropInDb = crops.find(c => c._id === crop._id) || {};
  cropInDb.name = crop.name;
  cropInDb.cropType = typesAPI.types.find(t => t._id === crop.typeId);
  cropInDb.plantSeason = crop.plantSeason;
  cropInDb.harvestSeason = crop.harvestSeason;
  cropInDb.lifeCycle = crop.lifeCycle;

  if (!cropInDb._id) {
    cropInDb._id = Date.now().toString();
    crops.push(cropInDb);
  }

  return cropInDb;
}

export function deleteCrop(id) {
  let cropInDb = crops.find(c => c._id === id);
  crops.splice(crops.indexOf(cropInDb), 1);
  return cropInDb;
}