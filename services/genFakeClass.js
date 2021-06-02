const genFakeClass = () => {
  const grade = Math.ceil(Math.random() * 12);
  const subject = [
    "English",
    "Math",
    "Chinese",
    "Science",
    "History",
    "Geography",
  ];

  return {
    id: Math.floor(Math.random() * 3000000) + 10000000,
    grade: `Grade ${grade}`,
    subject: subject[Math.floor(Math.random() * subject.length)],
  };
};

module.exports = genFakeClass;
