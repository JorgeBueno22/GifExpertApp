export const getGifs = async (category) => {
    const url =
     `https://api.giphy.com/v1/gifs/search?api_key=Ujt0Io7XoTI86QdxWAFPWmwc1H5X5OtL&q=${category}&limit=10;`
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();
    const gifs = data.map((imagen) => ({
      id: imagen.id,
      title: imagen.title,
      url: imagen.images.fixed_height.url
    }));
 return gifs;
}
