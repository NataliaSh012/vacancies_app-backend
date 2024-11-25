import Vacancy from "../models/vacancy.js"

export const getAllVacancies = async (req, res, next) => {
  try {
    const vacancies = await Vacancy.find();
    res.status(200).json({
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
    note: note || "",
  });

  try {
    const savedVacancy = await newVacancy.save();
    res.status(201).json({
      message: "Vacancy was created successfully!",
      data: savedVacancy,
    });
  } catch (error) {
    console.error("Error creating vacancy:", error);
    res
      .status(500)
      .json({ message: "Failed to create vacancy. Please try again later." });
  }
};

export const updateVacancy = async (req, res, next) => {
  console.log("Updating")
  const { id } = req.params;
  const { company, position, salary, status, note } = req.body; 

  try {
    const vacancy = await Vacancy.findById(id);

    if (!vacancy) {
      return res.status(404).json({ message: "Vacancy not found" });
    }

    vacancy.company = company || vacancy.company;
    vacancy.position = position || vacancy.position;
    vacancy.salary = salary || vacancy.salary;
    vacancy.status = status || vacancy.status;
    vacancy.note = note || vacancy.note;

    const updatedVacancy = await vacancy.save();

    res.status(200).json({
      message: "Vacancy was updated!",
      data: updatedVacancy,
    });
  } catch (error) {
    console.error("Error updating vacancy:", error);
    res.status(500).json({ message: "Failed to update vacancy" });
  }
};
