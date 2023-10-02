import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function NowPlaying() {
  const [dados, setdados] = React.useState([])
  React.useEffect(() => {
    axios({
      url: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
    }).then(res => {

      setdados(res.data.data.slice(0, 15))

    })
  }, [])
  console.log(dados)
  return (
    <div>
      {/* <h3 className='text-center'>
        NowPlaying
      </h3>
      <div className='row m-0'>
        {
          dados.slice(0, 6).map(item => <div key={item.id} className='col-md-4 mb-4'>
            <div className='text-center'>
              <div>
                {item.card_images && item.card_images.length > 0 && (
                  <img src={item.card_images[0].image_url_small} alt={item.name} />
                )}
              </div>
              <div>{item.name}</div>
            </div>
          </div>)
        }
      </div> */}
      NowPlaying
    </div>
  )
}
