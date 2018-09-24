import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let NutritionalProperties = new Schema({
    calories: {
        type: Number
    }    
});

console.debug('Register schema for: NutritionalProperties')
export default mongoose.model('NutritionalProperties', NutritionalProperties);
