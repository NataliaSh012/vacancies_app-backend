import Vacancy from "../models/vacancy.js"

export const getAllVacancies = async (req, res, next) => {
  try {
    const vacancies = await Vacancy.find();
    res.status(200).json({
      message: "Successfully fetched vacancies",
      data: vacancies,
    });
  } catch (error) {
    console.error("Error fetching vacancies:", error);
    res.status(500).json({
      message: "Failed to fetch vacancies. Please try again later.",
    });
  }
};

export const createVacancy = async (req, res, next) => {
  const { company, position, salary, status, note } = req.body;

  if (!company || !position || !salary || !status) {
    return res
      .status(400)
      .json({ message: "All required fields must be filled." });
  }

  const newVacancy = new Vacancy({
    company,
    position,
    salary,
    status,
    note,
  });

  try {
    const savedVacancy = await newVacancy.save();
    res.status(201).json({
      message: "Vacancy was created successfully!",
      vacancy: savedVacancy,
    });
  } catch (error) {
    console.error("Error creating vacancy:", error);
    res
      .status(500)
      .json({ message: "Failed to create vacancy. Please try again later." });
  }
};
