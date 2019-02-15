import MEalService from "../Services/meal.services";
import dummyData from "../Utilities/dummyData";

const Mealcontroller = {
  fetchAllMeals(req, res) {
    const allMeals = MEalService.fetchAllMeals();
    return res
      .json({
        data: allMeals
      })
      .status(200);
  },

  addAMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MEalService.addMeal(newMeal);
    return res
      .json({
        data: createdMeal
      })
      .status(201);
  },

  getSingleMeal(req, res) {
    const id = req.params.id;
    const singleMeal = MEalService.getAMeal(id);
    return res
      .json({
        data: singleMeal
      })
      .status(200);
  },

  updateMeal(req, res) {
    const id = req.params.id;
    const UpdatedMeal = req.body;

    const Update = MEalService.updateAmeal(UpdatedMeal, id);
    return res
      .json({
        data: Update
      })
      .status(200);
  },

  deleteAMeal(req, res) {
    const id = req.params.id;
    const del = MEalService.deleteAmeal(id);
    return res
      .json({
        data: del
      })
      .status(200);
  }
};

export default Mealcontroller;
