import axios from "axios";
import { useState, useEffect } from 'preact/hooks';

const Categorias = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        (async function() {
            const {data} = await axios.get("http://localhost:1337/api/categorias?fields[0]=nombre&populate[imagen][fields][0]=url")
            setCategories(data.data)
        })();
    }, [])
    

  return (
    <ul class="container flex justify-center items-center gap-6 py-2">
        {
            categories.map(categorie => (
                <li>
                    <button class="fetchItemsCategorie flex flex-col gap-1 justify-center items-center font-semibold">
                        <img src={"http://localhost:1337"+categorie.imagen.url} alt={categorie.nombre} class="w-8"/>
                        <span class="text-sm">{categorie.nombre}</span>
                    </button>
                </li>
            ))
        }
    </ul>
  )
}

export default Categorias

