export function getDateString(date, monthIndex, year) {
  const dateObj = new Date(year, monthIndex, date);
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return dateObj.toLocaleDateString("en-IN", options);
}
