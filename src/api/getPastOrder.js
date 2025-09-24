export default async function getPastOrder(order) {
  const response = await fetch(`/api/past-order/${order}`);
  const data = await response.json();
  console.log("DATA: ", data);
  return data;
}
