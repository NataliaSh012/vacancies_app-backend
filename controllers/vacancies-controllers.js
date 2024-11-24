import Vacancy from "../models/vacancy.js"

export const getAllVacancies = (req, res, next) => {
  console.log("fetching all");
  res.status(200).json({
    message: "Successfully fetched vacancies",
    data: [
      {
        company: "TechCorp",
        position: "Frontend Developer",
        salary: "$60,000 - $80,000",
        status: "Open",
        note: "Remote position available",
        _id: "1",
      },
      {
        company: "BizGroup",
        position: "Backend Developer",
        salary: "$70,000 - $90,000",
        status: "Closed",
        note: "On-site only",
        _id: "2",
      },
    ],
  });
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
