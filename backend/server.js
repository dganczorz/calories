import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import './model/Model';
import Controllers from './controllers/Controllers';
import seed from './seeder/seeder';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1/calories', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.debug('MongoDB database connection established successfully!');
    seed();
});

// TODO Decide one approach
app.get('/ingredients', Controllers.Ingredients.getIngredients);
app.post('/ingredients', Controllers.Ingredients.addIngredient);

app.get('/', Controllers.Ingredients.getIngredients);
// app.get('/', (req, res) => res.send('Welcome in Calories!'));

const port = 4000;
app.listen(port, () => console.log(`Express server running on port ${port}`));
