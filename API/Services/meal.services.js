import dummyData from "../Utilities/dummyData";
import Meal from "../models/meal";

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
    return dummyData.meals;
  },

  getAMeal(id) {
    const meal = dummyData.meals.find(meal => meal.id == id);
    if (meal) {
      return meal;
    } else {
      return `Meal with id: ${id} does not exist`
    }

  },
  updateAmeal(id, meal) {
    const checkId = parseInt(id, Number);
    const newMealList = dummyData.meals.filter(meal => meal.id !== checkId);
    const idAvailable = (dummyData.meals.length !== newMealList.length);
    const editedMeal = {
      id: checkId,
      name: meal.name,
    };
    if (idAvailable) {
      dummyData.meals = [editedMeal, ...newMealList];
    }
    return {
      idAvailable,
      editedMeal,
    };
  },

  deleteAmeal(id) {
    const checkId = parseInt(id, Number);
    const newMealList = dummyData.meals.filter(meal => meal.id !== checkId);
    const idAvailable = (dummyData.meals.length !== newMealList.length);
    dummyData.meals = newMealList;

    if (id) {
      return idAvailable;
    } else {
      return `Meal with id: ${id} unavailable`;
    }
  },
};

export default MEalService;
