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

  addMeal(req, res) {
    const newMeal = req.body;
    const createdMeal = MEalService.addMeal(newMeal);
    res.status(201);
    return res.json({
      status: "meal successfully added",
      data: createdMeal
    });
  },

  getSingleMeal(req, res) {
    const id = req.params.id;
    const singleMeal = MEalService.getAMeal(id);
    let response = {};
    if (typeof singleMeal === 'object') {
      res.status(200);
      response = res.json({
        status: 'success',
        data: singleMeal,
      });
    }
    else {
      res.status(404);
      response = res.json({
        status: 'failed',
        message: `Meal with id: ${id} does not exist`
      });
    }
    return response;
  },

  updateMeal(req, res) {
    const id = req.params.id;
    const entry = req.body;
    const result = MEalService.updateAmeal(id, entry);
    let response = {};
    let status = 0;
    if (result.idAvailable) {
      response = {
        ...response,
        status: 'success',
        message: `Meal with id: ${id} edited successfully.`,
        data: result.editedMeal,
      };
      status = 202;
    } else {
      response = {
        ...response,
        status: 'error',
        message: `Meal with id: ${id} not found.`,
      };
      status = 404;
    }
    return res.status(status).json({
      response,
    });
  },

  deleteAMeal(req, res) {
    const id = req.params.id;
    const del = MEalService.deleteAmeal(id);
    let response = {}
    let status = 0;
    if (del) {
      response = {
        ...response,
        status: 'success',
        message: `Meal with id: ${id} deleted successfully`,
      };
      status = 202;
    } else {
      response = {
        ...response,
        status: 'error',
        message: `Meal with id: ${id} not found.`,
      };
      status = 404;
    }
    return res.status(status).json({
      response,
    });
  },
};

export default Mealcontroller;
