import { Schema, model } from "mongoose";

const vacancySchema = new Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  salary: { type: String, required: true },
  status: { type: String, required: true },
  note: { type: String },
}, { timestamps: true }); 

export default model("Vacancy", vacancySchema);
