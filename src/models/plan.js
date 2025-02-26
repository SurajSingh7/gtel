// app/models/Plan.js
import mongoose from 'mongoose';

// Plan schema definition
const planSchema = new mongoose.Schema({
  city: String,
  email: String,
  name: String,
  mobile: Number,
  message:String,
  
});

// Create or use existing Plan model
const Plan = mongoose.models.Plan || mongoose.model('Plan', planSchema);

export default Plan;
