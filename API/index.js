const express = require("express");
const bodyParser = require("body-parser");
const router = require("./Routes/meal.route");
const mealroutes = require("./Routes/menu.route");
const orderRoutes = require("./Routes/order.route");

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('The API is set');
});

app.use('/api/v1/meals', router);

app.use('/api/v1/menu', mealroutes);

app.use('/api/v1/order', orderRoutes);

app.listen(PORT, () => { console.log(`Server is running on ${PORT}`); });

export default app;
