import { useState, useEffect } from "react";
import { getGifs } from "./services/getGifs";
import { Gif } from "./Gif";

export const GifGrid = ({ category }) => {
  const [imagenes, setimagenes] = useState([]);

  const getImagenes = async () => {
    const gifs = await getGifs(category);
    setimagenes(gifs);
  };

  useEffect(() => {
    getImagenes();
  }, []);

  return (
    <>
    <h1>{category}</h1>
      <div className="card-grid">
        {imagenes.map((imagen) => (
          <Gif key={imagen.id} imagen={imagen} />
        ))}
      </div>
      
    </>
  );
};
