import dummyData from "../Utilities/dummyData";
import Meal from "../meal.models";

const MEalService = {
  fetchAllMEals() {
    return dummyData.meals.map(meal => {
      const newMeal = new Meal();
      newMeal.id = meal.id;
      newMeal.name = meal.name;
      newMeal.quantity = meal.quantity;
      newMeal.price = meal.price;
    });
  },

  addMeal(meal) {
    const mealLength = dummyData.meals.length;
    const lastId = dummyData.meals[mealLength - 1].id;
    const newId = lastId + 1;
    dummyData.meals.push(meal);
    return meal;
  },

  getAMeal(id) {
    const meal = dummyData.meals.find(meal => meal.id == id);
    return meal || [];
  }
};

export default MEalService;
