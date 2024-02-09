import { useState } from "react";
import {AddCategory} from "./AddCategory";
import { GifGrid } from "./gifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const addCategory = (categoria) => {    
    setCategories([categoria, ...categories]);  
  };
  return (
    <>
      {/* Titulo */}
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory onAddCategory={addCategory} />
      {/* listado */}
      {
      categories.map((category) => (
        <GifGrid key={category} category={category}></GifGrid>
      ))
      }
      

    </>
  );
};
