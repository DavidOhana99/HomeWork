import mongoose from 'mongoose';
const { Schema } = mongoose;

const contactsSchema = new Schema({
  name: { type: String, required: true },
  number: {type:Number,requiredtrue}

});

export default mongoose.model('cantacts', contactsSchema);
