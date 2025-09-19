import { useState, useEffect } from "react";

export const usePizzaOfTheDay = () => {
  const [pizzaOfTheDay, setPizzaOfTheDay] = useState(null);

  async function fetchPizzaOfTheDay() {
    const pizzaOfTheDayRes = await fetch("/api/pizza-of-the-day");
    const pizzaOfTheDayJson = await pizzaOfTheDayRes.json();
    setPizzaOfTheDay(pizzaOfTheDayJson);
  }

  useEffect(() => {
    fetchPizzaOfTheDay();
  }, []);

  return pizzaOfTheDay;
};
