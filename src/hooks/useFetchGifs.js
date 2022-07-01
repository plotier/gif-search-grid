import { useState, useEffect } from "react";
import { getGifs } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {


    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    //hacer esto en vez de getGifs(category).then(newImages => setImages(newImages))
    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false)
    }

    useEffect(() => {
        getImages()
    }, [])

    return {
        //se pone una sola palabra porque si no sería images:images, o isLoading:isLoading
        images,
        isLoading
    }
}
