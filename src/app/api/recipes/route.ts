const recipes = [
  {
    id: "1",
    title: "Veggie Carbonara",
    image: "veggie_carbonara.jpg",
    cookTime: "20 mins",
    content:
      "A vegetarian twist on the classic Italian pasta dish with eggs, cheese, and vegetarian bacon.",
    vegan: false,
    chefNote: "Swap in smoked tofu for a deeper flavor twist.",
  },
  {
    id: "2",
    title: "Veg Stir-Fry",
    image: "veg_stir_fry.jpg",
    cookTime: "25 mins",
    content:
      "A quick and healthy vegetarian stir-fry with fresh vegetables and tofu.",
    vegan: true,
    chefNote: "Hit it with sesame oil at the end for that restaurant finish.",
  },
  {
    id: "3",
    title: "Veg Alfredo",
    image: "veg_alfredo.jpg",
    cookTime: "30 mins",
    content:
      "Creamy pasta with grilled vegetarian chicken and a rich Alfredo sauce.",
    vegan: false,
    chefNote: "Add a pinch of nutmeg—it's the secret to a silky Alfredo.",
  },
  {
    id: "4",
    title: "Mushroom Risotto",
    image: "mushroom_risotto.jpg",
    cookTime: "40 mins",
    content:
      "A comforting vegetarian Italian rice dish with sautéed mushrooms and parmesan cheese.",
    vegan: false,
    chefNote: "Stir with love—risotto rewards patience.",
  },
  {
    id: "5",
    title: "Veg Lentil Soup",
    image: "veg_lentil_soup.jpg",
    cookTime: "35 mins",
    content:
      "A hearty and nutritious vegetarian soup made with lentils and a blend of spices.",
    vegan: true,
    chefNote: "Squeeze in lemon before serving—it brightens everything.",
  },
  {
    id: "6",
    title: "Grilled Mushrooms",
    image: "grilled_mushrooms.jpg",
    cookTime: "15 mins",
    content:
      "Flavorful grilled Portobello mushrooms with a lemon and herb marinade.",
    vegan: true,
    chefNote: "Don't skip the marinade—let it soak for at least 30 minutes.",
  },
  {
    id: "7",
    title: "Roasted Veg Salad",
    image: "roasted_veg_salad.jpg",
    cookTime: "30 mins",
    content:
      "A colorful vegetarian salad featuring roasted vegetables and a balsamic vinaigrette.",
    vegan: true,
    chefNote: "Roast at high heat for caramelized edges and bold flavor.",
  },
  {
    id: "8",
    title: "Veggie Tacos",
    image: "veggie_tacos.jpg",
    cookTime: "25 mins",
    content:
      "Tasty vegetarian tacos with seasoned plant-based meat and fresh toppings.",
    vegan: true,
    chefNote: "Warm the tortillas before serving—trust me, it matters.",
  },
  {
    id: "9",
    title: "Chocolate Cookies",
    image: "chocolate_cookies.jpg",
    cookTime: "12 mins",
    content:
      "Homemade vegetarian chocolate chip cookies that are soft and gooey inside.",
    vegan: false,
    chefNote: "Chill the dough before baking for thicker, chewier cookies.",
  },
]

export async function GET() {
  return new Response(JSON.stringify(recipes), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
