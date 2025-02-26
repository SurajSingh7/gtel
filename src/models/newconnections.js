import mongoose from 'mongoose';

const NewConnectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  city: { type: String, required: true },
  serviceType: { type: String, required: true },
  supportType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const NewConnection = mongoose.model('NewConnection', NewConnectionSchema);

export default NewConnection;
