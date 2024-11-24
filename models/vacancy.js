import { Schema, model } from "mongoose";

const vacancySchema = new Schema({
  company: { type: String, required: true },
  vacancy: { type: String, required: true },
  salaryRange: { type: String },
  status: { type: String },
  note: { type: String },
});

export default model("Vacancy", vacancySchema);
