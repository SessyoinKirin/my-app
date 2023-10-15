import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function FilmItem(item) {

    const navigate = useNavigate()
    const handleChangePage = (id) => {
        navigate(`/detail/${id}`)
    }

    return (
        <div key={item.id} className="col-md-6 mb-4" onClick={() => handleChangePage(item.id)}>
            <div className="d-flex">
                <div className="text-center">
                    <div>
                        {item.card_images && item.card_images.length > 0 && (
                            <img src={item.card_images[0].image_url_small} alt={item.name} />
                        )}
                    </div>
                </div>
                <div className="ml-2 textos">
                    <div>{item.name}</div>
                    <div className='descricao'>{item.desc}</div>
                    <div>
                        {
                            item.card_prices && item.card_prices.length > 0 && (
                                <p>Amazon - R$ {item.card_prices[0].amazon_price}</p>
                            )
                        }
                    </div>
                    {/* Outros elementos à direita */}
                </div>


            </div>
        </div>

    )
}
