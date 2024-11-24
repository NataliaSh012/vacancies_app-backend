export const getAllVacancies = () => {
    res.status(200).json({
      message: "Successfully fetched vacancies",
      vacancies: [
        {
          id: 1,
          company: "TechCorp",
          position: "Frontend Developer",
          salary: "$60,000 - $80,000",
          status: "Open",
        },
        {
          id: 2,
          company: "InnovateX",
          position: "Backend Developer",
          salary: "$70,000 - $90,000",
          status: "Closed",
        },
      ],
    });
}
