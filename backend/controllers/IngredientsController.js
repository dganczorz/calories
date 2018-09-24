import Ingredient from '../model/Ingredient';

// export default {
//     // get all ingredients
//     getIngredients: (req, res) => {
//         Ingredient.find((err, ingredients) => {
//             if (err)
//                 console.log(err);
//             else
//                 res.json(ingredients);
//         })
//     },

//     // create ingredient
//     addIngredient: (req, res) => {
//         let ingredient = new Ingredient(req.body);
//         ingredient.save()
//             .then(ingredient => {
//                 res.status(200).json({'issue': 'Added successfully'});
//             })
//             .catch(err => {
//                 res.status(400).send('Failed to create new ingredient');
//             });
//     }
// }

// get all ingredients
exports.getIngredients = (req, res) => {
    Ingredient.find((err, ingredients) => {
        if (err)
            console.log(err);
        else
            res.json(ingredients);
    })
};

// create ingredient
exports.addIngredient = (req, res) => {
    let ingredient = new Ingredient(req.body);
    ingredient.save()
        .then(ingredient => {
            res.status(200).json({'issue': 'Added successfully'});
        })
        .catch(err => {
            res.status(400).send('Failed to create new ingredient');
        });
};
