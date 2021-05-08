export const fetchData = async () => {
  let res = await fetch("http://localhost:3000/api/books");
  let arrayData = await res.json();
  return arrayData.data;
};
