import dummyData from "../Utilities/dummyData";
import orders from "../models/order.models";
import Orders from "../models/order.models";

const orderServices = {
  //Post
  placeorder(order) {
    const orderLength = dummyData.orders.length;
    const lastId = dummyData.orders[orderLength - 1].id;
    const newId = lastId + 1;
    order.id = newId;
    dummyData.orders.push(order);
    return order;
  },
  //put
  updateOrder(order, id) {
    const Order = dummyData.orders.find(order => order.id == id);
    if (!Order) {
      return ["This food item does not exist"];
    } else {
      Order.id = order.id;
      Order.name = order.name;
      Order.price = order.price;
      Order.quantity = Order.quantity;
    }
    return Order;
  },
  //get
  getAllOrders() {
    const validOrder = dummyData.orders.map(orders => {
      const newOrder = new Orders();
      newOrder.id = orders.id;
      newOrder.name = orders.name;
      newOrder.quantity = orders.quantity;
      newOrder.price = orders.price;
      return newOrder;
    });
    return validOrder;
  }
};

export default orderServices;
