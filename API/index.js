import express from 'express';
import bodyParser from 'body-parser';
import router from './Routes/meal.route';
import mealroutes from './Routes/menu.route';
import orderRoutes from './Routes/order.route';

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
