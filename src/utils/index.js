export const getRandomBG = () => {
  const colors = [
    "#f6b100",
    "#025cca",
    "#be3e3f",
    "#02Ca3a",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};
