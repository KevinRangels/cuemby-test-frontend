const transformTextUppercase = (str) => {
  let text = str.toLowerCase();
  text = text.replace(/\b\w/g, (l) => l.toUpperCase());
  return text;
};
const transformTextCurrency = (number) => {
  let numberFormated = number;
  numberFormated = numberFormated.toLocaleString("de-DE", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return numberFormated;
};
module.exports = {
  transformTextUppercase,
  transformTextCurrency,
};
