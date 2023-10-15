import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useNavigate } from 'react-router-dom';

export default function NowPlaying() {
  const [dados, setdados] = React.useState([])
  React.useEffect(() => {
    axios({
      url: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    }).then(res => {
      console.log(res.data.data.slice(0, 30))
      setdados(res.data.data.slice(0, 30))

    })
  }, [])
  const navigate = useNavigate()
  const handleChangePage = (id) => {
    navigate(`/detail?id=${id}`)
  }
  const dadosEmbaralhados = embaralhamento(dados)
  return (
    <div>
      <h3 className='text-center'>
        NowPlaying
      </h3>
      <div className='row m-0'>
        {
          dadosEmbaralhados.slice(0,3).map(item => <div key={item.id} className='col-md-4 mb-4' onClick={() => handleChangePage(item.id)}>
            <div className='text-center'>
              <div>
                {item.card_images && item.card_images.length > 0 && (
                  <img src={item.card_images[0].image_url_small} alt={item.name} />
                )}
              </div>
              {/* <div>{item.name}</div> */}
            </div>
          </div>)
        }
      </div>
    </div>
  )
}

function embaralhamento(lista){
  const embaralhou = [...lista];
  for(let i=embaralhou.length-1; i>0; i--){
    const j = Math.floor(Math.random()*(i+1));
    [embaralhou[i],embaralhou[j]]=[embaralhou[j],embaralhou[i]]
  }
  return embaralhou;
}
