import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Ingredient = new Schema({
    label: {
        type: String
    },
    variants: [{
        type: Schema.Types.ObjectId // IngredientVariant
    }]
});

console.debug('Register schema for: Ingredient')
export default mongoose.model('Ingredient', Ingredient);
