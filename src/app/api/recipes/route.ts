const recipes = [
  {
    id: "1",
    title: "Veggie Carbonara",
    image: "veggie_carbonara.jpg",
    description: "20 mins to cook.",
    content:
      "A vegetarian twist on the classic Italian pasta dish with eggs, cheese, and vegetarian bacon.",
    vegan: false,
  },
  {
    id: "2",
    title: "Veg Stir-Fry",
    image: "veg_stir_fry.jpg",
    description: "25 mins to cook.",
    content:
      "A quick and healthy vegetarian stir-fry with fresh vegetables and tofu.",
    vegan: true,
  },
  {
    id: "3",
    title: "Veg Alfredo",
    image: "veg_alfredo.jpg",
    description: "30 mins to cook.",
    content:
      "Creamy pasta with grilled vegetarian chicken and a rich Alfredo sauce.",
    vegan: false,
  },
  {
    id: "4",
    title: "Mushroom Risotto",
    image: "mushroom_risotto.jpg",
    description: "40 mins to cook.",
    content:
      "A comforting vegetarian Italian rice dish with sautéed mushrooms and parmesan cheese.",
    vegan: false,
  },
  {
    id: "5",
    title: "Veg Lentil Soup",
    image: "veg_lentil_soup.jpg",
    description: "35 mins to cook.",
    content:
      "A hearty and nutritious vegetarian soup made with lentils and a blend of spices.",
    vegan: true,
  },
  {
    id: "6",
    title: "Grilled Mushrooms",
    image: "grilled_mushrooms.jpg",
    description: "15 mins to cook.",
    content:
      "Flavorful grilled Portobello mushrooms with a lemon and herb marinade.",
    vegan: true,
  },
  {
    id: "7",
    title: "Roasted Veg Salad",
    image: "roasted_veg_salad.jpg",
    description: "30 mins to cook.",
    content:
      "A colorful vegetarian salad featuring roasted vegetables and a balsamic vinaigrette.",
    vegan: true,
  },
  {
    id: "8",
    title: "Veggie Tacos",
    image: "veggie_tacos.jpg",
    description: "25 mins to cook.",
    content:
      "Tasty vegetarian tacos with seasoned plant-based meat and fresh toppings.",
    vegan: true,
  },
  {
    id: "9",
    title: "Chocolate Cookies",
    image: "chocolate_cookies.jpg",
    description: "12 mins to cook.",
    content:
      "Homemade vegetarian chocolate chip cookies that are soft and gooey inside.",
    vegan: false,
  },
]

export async function GET() {
  return new Response(JSON.stringify(recipes), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
