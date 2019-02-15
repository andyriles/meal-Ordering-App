import menuServices from "../Services/order.services";
import dummyData from "../Utilities/dummyData";
import orderServices from "../Services/order.services";

const orderController = {
  fetchAllOrders(req, res) {
    const allOrders = orderServices.getAllOrders();
    return res
      .json({
        data: allOrders
      })
      .status(200);
  },

  placeorder(req, res) {
    const newOrder = req.body;
    const CreatedOrder = orderServices.placeorder(newOrder);
    return res
      .json({
        data: CreatedOrder
      })
      .status(201);
  },

  updateOrder(req, res) {
    const id = req.params.id;
    const UpdatedOrder = req.body;

    const Update = orderServices.updateOrder(UpdatedOrder, id);
    return res
      .json({
        data: Update
      })
      .status(200);
  }
};

export default orderController;
