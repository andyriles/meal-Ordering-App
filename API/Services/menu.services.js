import dummyData from "../Utilities/dummyData";
import Menu from "../models/menu";
//for the caterer and customer
const menuServices = {
  getMenu(id) {
    const menu = dummyData.menu.find(menu => menu.id == id);
    return menu || ["There is no menu for this day"];
  },
  //to be accessed only by the caterer
  addMenu(menu) {
    const menuLength = dummyData.menu.length;
    const lastId = dummyData.menu[menuLength - 1].id;
    const newId = lastId + 1;
    menu.id = newId;
    dummyData.menu.push(menu);
    return dummyData.menu;
  },

  //for ease of access
  getAllMenu() {
    const validMenu = dummyData.menu.map(menu => {
      const newmenu = new Menu();
      newmenu.id = menu.id;
      newmenu.name = menu.name;
      newmenu.quantity = menu.quantity;
      newmenu.price = menu.price;
      return newmenu;
    });
    return validMenu;
  }
};

export default menuServices;
