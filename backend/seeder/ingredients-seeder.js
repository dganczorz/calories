import mongoose from 'mongoose';
import Ingredient from '../model/Ingredient';
import IngredientVariant from '../model/IngredientVariant';
import NutritionalProperties from '../model/NutritionalProperties';

export default () => {
    let deletePromises = [
        Ingredient.deleteMany(),
        IngredientVariant.deleteMany(),
        NutritionalProperties.deleteMany()
    ];

    return Promise.all(deletePromises).then( () => {

        let nutritionalProperties = [];
        nutritionalProperties.push(new NutritionalProperties({ calories: 123 }));
        nutritionalProperties.push(new NutritionalProperties({ calories: 450 }));
        nutritionalProperties.push(new NutritionalProperties({ calories: 790 }));
        nutritionalProperties.push(new NutritionalProperties({ calories: 150 }));

        return NutritionalProperties.create(nutritionalProperties).then( (nutritionalProperties) => {

            let ingredientVariants = [];
            ingredientVariants.push(new IngredientVariant({ label: 'Surowy', nutritionalProperties: nutritionalProperties[0]._id }));
            ingredientVariants.push(new IngredientVariant({ label: 'Smażony', nutritionalProperties: nutritionalProperties[1]._id }));
            ingredientVariants.push(new IngredientVariant({ label: 'Gotowany', nutritionalProperties: nutritionalProperties[2]._id }));
            ingredientVariants.push(new IngredientVariant({ label: 'Gotowane', nutritionalProperties: nutritionalProperties[3]._id }));

            return IngredientVariant.create(ingredientVariants).then( (variants) => {

                let ingredients = [];
                ingredients.push(new Ingredient({ label: 'Kurczak', variants: [variants[0]._id, variants[1]._id, variants[2]._id] }));
                ingredients.push(new Ingredient({ label: 'Ziemniaki', variants: [variants[3]._id] }));

                return Ingredient.create(ingredients);
            });
        })
    })
};
