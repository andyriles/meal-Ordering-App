import dummyData from "../Utilities/dummyData";
import Meal from "../models/meal.models";

const MEalService = {
  fetchAllMeals() {
    const validMeals = dummyData.meals.map(meal => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      return newMeal;
    });
    return validMeals;
  },

  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    meal.id = newId;
    dummyData.meals.push(meal);
    return meal;
  },

  getAMeal(id) {
    const meal = dummyData.meals.find(meal => meal.id == id);
    return meal || ["This food item does not exist"];
  },
  updateAmeal(meal, id) {
    const Meal = dummyData.meals.find(meal => meal.id == id);
    if (!Meal) {
      return ["This food item does not exist"];
    } else {
      Meal.id = meal.id;
      Meal.name = meal.name;
    }
    return Meal;
  },

  deleteAmeal(id) {
    var Meal = dummyData.meals.find(meal => meal.id == id);
    if (!Meal) {
      return ["This food item does not exist"];
    } else {
      delete Meal.id;
      delete Meal.name;
    }
  }
};

export default MEalService;
