import { useState } from "react"

//Archivos de barril
import { AddCategory,GifGrid } from "./components";


//"yarn create vite", y despues "yarn install" para los modulos de node

export const GifExpertApp = () => {

  const [categories, setCategories] = useState([""]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories])
  }
  return (
    <>
      <h1>GifExpertReact</h1>
      <AddCategory

        onNewCategory={(value) => onAddCategory(value)}
      />

      {categories.map(category => (

        <GifGrid key={category} category={category} />

      ))}


    </>
  )
}
