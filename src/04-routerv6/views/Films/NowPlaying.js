import React, { useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './NowPlaying.css'
import FilmItem from './FilmItem';

export default function NowPlaying() {
  const [dados, setdados] = React.useState([])
  const[run, setRerun] = useState(false)
  React.useEffect(() => {
    axios({
      url: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    }).then(res => {
      console.log(res.data.data.slice(0, 30))
      setdados(res.data.data.slice(0, 30))

    })
  }, [])

  const dadosEmbaralhados = embaralhamento(dados)
  const handleRun=()=>{
    setRerun(!run)
  }
  return (
    <div>
      <h3 className='text-center' onClick={handleRun}>
        NowPlaying
      </h3>
      <div className='row m-0'>
        {
          dadosEmbaralhados.slice(0, 4).map((item) => (
            <FilmItem key={item.id} {...item}></FilmItem>
          ))
        }

      </div>
    </div>
  )
}



function embaralhamento(lista) {
  const embaralhou = [...lista];
  for (let i = embaralhou.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [embaralhou[i], embaralhou[j]] = [embaralhou[j], embaralhou[i]]
  }
  return embaralhou;
}
