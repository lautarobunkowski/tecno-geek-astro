import axios from "axios";
import { useState, useEffect } from 'preact/hooks';

const Items = ({categorieName}) => {
    const [categorieItems, setCategorieItems] = useState([])

    useEffect(() => {
        (async function() {
            const {data} = await axios.get(`http://localhost:1337/api/categorias?filters[nombre][$eq]=${categorieName}&fields[0]=nombre&populate[productos][populate]imagen=*`)
            setCategorieItems(data.data[0].productos)
        })();
    }, [])

  return (
    <main class="container pt-5">
				<ul class="flex flex-wrap gap-4 justify-center">
					{
						categorieItems?.map(items => (
							<li class="w-40 h-56 shadow-lg rounded-xl overflow-hidden hover:-translate-y-3 transition-all ">
								<a href="" class="flex flex-col h-full">
									<img src={"http://localhost:1337"+items.imagen.url} alt="" class="h-36 w-full rounded-xl object-cover"/>
									<div class="flex justify-between px-2 flex-1 items-center text-sm ">
										<p class="font-bold">{items.nombre}</p>
										<span class="text-gray-600">${items.precio}</span>
									</div>
								</a>
							</li>
						))
					}
				</ul>
	</main>
  )
}

export default Items