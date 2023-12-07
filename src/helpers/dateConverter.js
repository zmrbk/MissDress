export const getDate = (dateString) => {
  const months = {
    0: "01",
    1: "02",
    2: "03",
    3: "04",
    4: "05",
    5: "06",
    6: "07",
    7: "08",
    8: "09",
    9: "10",
    10: "11",
    11: "12",
  };
  const date = new Date(dateString);
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const getISODate = (date) => {
  const iso = date.toISOString();
  return iso.slice(0, iso.indexOf("T")) + "T00:00:00Z";
};
