import menuServices from "../Services/menu.services";
import dummyData from "../Utilities/dummyData";

const menuController = {
  getMenu(req, res) {
    const id = req.params.id;
    const Menu = menuServices.getMenu(id);
    return res
      .json({
        status: "success",
        data: Menu
      })
      .status(200);
  },

  addMenu(req, res) {
    const newMenu = req.body;
    const createdMenu = menuServices.addMenu(newMenu);
    res.status(201)
    return res
      .json({
        status: "new menu successfully created",
        data: createdMenu
      });
  },
  fetchAllMenu(req, res) {
    const allMenu = menuServices.getAllMenu();
    return res
      .json({
        data: allMenu
      })
      .status(200);
  }
};
export default menuController;
