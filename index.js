// Code your solution here
const findMatching = (drivers, name) => {
  return drivers.filter(
    (driver_name) => driver_name.toUpperCase() === name.toUpperCase()
  );
};

const fuzzyMatch = (drivers, name) => {
  return drivers.filter(
    (driver_name) => driver_name.slice(0, name.length) === name
  );
};

const matchName = (drivers, name) => {
  return drivers.filter((driver_name) => driver_name.name === name);
};
