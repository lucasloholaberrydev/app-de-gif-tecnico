import React, {useEffect, useState} from "react";
import Gif from "./Gif";
import getGifs from '../services/getGifs'

export default function ListOfGifs ({params}) {

  const {keyword} = params
  const [loading, setLoading] = useState([])

    const [gifs, setGifs] = useState([])
    
    useEffect(function (){
        setLoading(true)
        getGifs({keyword})
        .then(gifs => {
           setGifs(gifs)
           setLoading(false)
          })
      }, [keyword])

      if(loading) return <h1>Cargando...</h1>
    return <div> {
      gifs.map(({id, title, url}) => 
        <Gif
        key={id}
        id={id}
        title={title} 
         
        url={url}/>
        )
      }
    </div>  
}

