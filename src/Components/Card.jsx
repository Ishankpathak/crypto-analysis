import React from 'react'
import '../index.css'
const Card = ({val , id}) => {
  return (
    
    <div key={id} className="main-container" >
    <div className="card" style={{width: '18rem'}}>
    <img src={val.icon} className="card-img-top" alt="coin-img" />
    <div className="card-body">
    <h5 className="card-title">{val.name}</h5>
    <h6 className="card-text">Rank:- {val.rank}</h6>
    <h6 className="card-text">Price:- ${val.price}</h6>
    <h6 className="card-text">Volume:- {val.volume}</h6>
    <h6 className="card-text">MarketCap:- {val.marketCap}</h6>
    <h6 className="card-text">Available Supply:- {val.availableSupply}</h6>
    <h6 className="card-text">Total Supply:- {val.totalSupply}</h6>
    <h6 className="card-text">Price changed 1hr:- {val.priceChange1h}</h6>
    <h6 className="card-text">Price changed 1day:- {val.priceChange1d.toFixed(2)}</h6>
    <h6 className="card-text">Price changed week:- {val.priceChange1w.toFixed(0)}</h6>

    <a href={val.websiteUrl} className="btn btn-success btn-sm">Visit Website</a>
    </div>
    </div>
    </div>
  )
}

export default Card
