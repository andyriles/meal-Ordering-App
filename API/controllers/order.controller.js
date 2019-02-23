import menuServices from "../Services/order.services";
import dummyData from "../Utilities/dummyData";
import orderServices from "../Services/order.services";

const orderController = {
  fetchAllOrders(req, res) {
    const allOrders = orderServices.getAllOrders();
    return res
      .json({
        status: "success",
        data: allOrders
      })
      .status(200);
  },

  placeorder(req, res) {
    const newOrder = req.body;
    const CreatedOrder = orderServices.placeorder(newOrder);
    res.status(201);
    return res
      .json({
        status: "success",
        data: CreatedOrder
      })

  },

  updateOrder(req, res) {
    const id = req.params.id;
    const UpdatedOrder = req.body;

    const Update = orderServices.updateOrder(UpdatedOrder, id);
    let response = {};
    let status = 0;
    if (Update.orderIdAvailable) {
      response = {
        ...response,
        status: 'success',
        message: `Order with id: ${id} edited successfully.`,
        data: Update.editedOrder,
      };
      status = 202;
    } else {
      response = {
        ...response,
        status: 'error',
        message: `Order with id: ${id} not found`,
      };
      status = 404;
    }
    return res.status(status).json({
      response
    })
  }
};

export default orderController;
