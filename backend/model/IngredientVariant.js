import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let IngredientVariant = new Schema({
    label: {
        type: String
    },
    nutritionalProperties: {
        type: Schema.Types.ObjectId // NutritionalProperties
    }
});

console.debug('Register schema for: IngredientVariant')
export default mongoose.model('IngredientVariant', IngredientVariant);
