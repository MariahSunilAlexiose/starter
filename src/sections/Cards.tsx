"use client";

import { useEffect, useState } from "react";

import { Card } from "@/components";
import { Recipe } from "@/types";

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch("http://localhost:4000/recipes");
  return result.json();
}

function Cards() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const newRecipes = await getRecipes();
      setRecipes(newRecipes);
    };
    fetchRecipes();
  }, []);
  return (
    <div className="grid grid-cols-3 gap-8">
      {recipes.map((recipe) => (
        <Card
          key={recipe.id}
          title={recipe.title}
          description={recipe.description}
          content={recipe.content}
          footer={recipe.vegan}
          image={recipe.image}
        />
      ))}
    </div>
  );
}

export default Cards;
