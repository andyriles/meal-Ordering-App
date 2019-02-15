import MEalService from "../Services/meal.services";

const Mealcontroller = {
  fetchAllMeals(req, res) {
    const allMeals = MEalService.fetchAllMeals();
    return res
      .json({
        status: "success",
        data: allMeals
      })
      .status(200);
  },

  addAMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MEalService.addMeal(newMeal);
    return res
      .json({
        status: "success",
        data: createdMeal
      })
      .status(201);
  },

  getSingleMeal(req, res) {
    const id = req.params.id;
    const singleMeal = MEalService.getAMeal(id);
    return res
      .json({
        status: "success",
        data: singleMeal
      })
      .status(200);
  }
};

export default Mealcontroller;
