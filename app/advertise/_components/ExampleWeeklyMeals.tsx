import WeeklyMealsCard from "@/app/meals/_components/WeeklyMealsCard";

const meal = [
  {
    id: 1,
    dayOfWeek: "Monday, 12 January, 2024",
    meal: "Your Fabulous Dish",
    business: "Your Restaurant Name",
    userId: 1,
    date: "2022-01-01",
    price: 19.99,
    city: "Your City",
  },
  {
    id: 2,
    dayOfWeek: "Tuesday, 13 January, 2024",
    meal: "Sizzling Seafood Platter",
    business: "Seaside Grill",
    userId: 1,
    date: "2022-01-02",
    price: 24.99,
    city: "Lagos",
  },
  {
    id: 3,
    dayOfWeek: "Wednesday, 14 January, 2024",
    meal: "Algarve Delight Salad",
    business: "Sunset Terrace",
    userId: 1,
    date: "2022-01-03",
    price: 16.5,
    city: "Portimão",
  },
  {
    id: 4,
    dayOfWeek: "Thursday, 15 January, 2024",
    meal: "Traditional Cataplana",
    business: "Marina Breeze",
    userId: 1,
    date: "2022-01-04",
    price: 21.75,
    city: "Faro",
  },
  {
    id: 5,
    dayOfWeek: "Friday, 16 January, 2024",
    meal: "Grilled Catch of the Day",
    business: "Harborview Restaurant",
    userId: 1,
    date: "2022-01-05",
    price: 29.99,
    city: "Tavira",
  },
];

function ExampleWeeklyMeals() {
  return meal.map((meal) => <WeeklyMealsCard key={meal.id} meal={meal} />);
}

export default ExampleWeeklyMeals;
