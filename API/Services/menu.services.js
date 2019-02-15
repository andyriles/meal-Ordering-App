import dummyData from "../Utilities/dummyData";
import Menu from "../models/menu.models";

const menuServices = {
  getMenu(id) {
    const menu = dummyData.menu.find(menu => menu.id == id);
    return menu || ["There is no menu for this day"];
  },
  addMenu(menu) {
    const menuLength = dummyData.menu.length;
    const lastId = dummyData.menu[menuLength - 1].id;
    const newId = lastId + 1;
    menu.id = newId;
    dummyData.menu.push(menu);
    return menu;
  },
  getAllMenu() {
    const validMenu = dummyData.menu.map(menu => {
      const newmenu = new Menu();
      newmenu.id = menu.id;
      newmenu.Breakfast = menu.Breakfast;
      newmenu.Lunch = menu.Lunch;
      newmenu.Dinner = menu.Dinner;
      newmenu.Fruits = menu.Fruits;
      return newmenu;
    });
    return validMenu;
  }
};

export default menuServices;
