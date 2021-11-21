import { useDispatch, useSelector } from "react-redux";
// import { getIdActions } from "../redux/infoCripto";
import { getIdActions } from "../redux/apiCrypto";
import { useEffect } from "react";
import { useParams } from 'react-router'
import './Info.css'

const Info = () => {

    const dispatch = useDispatch();
    const {id} = useParams()
    const {crypto} = useSelector(state => state.crypto);

    useEffect(() => {
        dispatch(getIdActions(id));
      }, [])

    return (
        <div className='cont-info'>
            {/* <p>{crypto.name}</p>
            <p>{crypto.symbol}</p>
            <p>{crypto.hashing_algorithm}</p>
            <p>{crypto.description ? crypto.description.en : ''}</p>
            <p>{crypto.links ? crypto.links.homepage[0] : ''}</p>
            <p>{crypto.categories ? crypto.categories[0] : ''}</p>
            <p>{crypto.block_time_in_minutes}</p> */}

    <div class="clearfix">
        
        <h2 className='p-3'>{crypto.name}</h2>
        
     
        <div class="container px-4">
            <div class="row gx-5">
                <div class="col p-3">
                <a className="btn btn-success" href={crypto.links ? crypto.links.homepage[0] : ''}>Sitio oficial de {crypto.symbol}</a>
                </div>
                <div class="col p-3">
                <a className="btn btn-success" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Sitios de blockchain</a>
                </div>
            </div>
        </div>
        
        <div className="row p-3">
            <div className="col">
                <div className="collapse multi-collapse" id="multiCollapseExample1">
                    <div className="card-info card card-body">
                    <p><a href={crypto.links ? crypto.links.blockchain_site[0] : ''}>Blockchain: Opcion 1</a></p>
                    <p><a href={crypto.links ? crypto.links.blockchain_site[1] : ''}>Blockchain: Opcion 2</a></p>
                    <p><a href={crypto.links ? crypto.links.blockchain_site[2] : ''}>Blockchain: Opcion 3</a></p>
                    <p><a href={crypto.links ? crypto.links.blockchain_site[3] : ''}>Blockchain: Opcion 4</a></p>
                    </div>
                </div>
        </div>
        </div>
        
        {crypto.image ? <img src={crypto.image.large} class="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/> : ''}
        <p>{crypto.description ? crypto.description.en : ''}</p>
        
    </div>

      <strong>Rank: {crypto.coingecko_rank}</strong>
      

    <div className="container">
  <div className="row">
    <div className="col order-last p-3">
        Bajada en 24hs: {crypto.market_data ? crypto.market_data.low_24h.usd : ''} USD
    </div>
    <div className="col p-3">
      Subida en 24hs: {crypto.market_data ? crypto.market_data.high_24h.usd : ''} USD
    </div>
    <div className="col order-first p-3">
        Porcentaje de cambio: {crypto.market_data ? crypto.market_data.ath_change_percentage.usd : '¿?'}%
    </div>
  </div>
</div>

    
    
    {/* <p>
  <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-bs-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger.
  </div>
</div> */}
            {/* <div class="container">
                <div class="row">
                    <div class="col-9">.col-9</div>
                    <div class="col-4">.col-4<br/>Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.</div>
                    <div class="col-6">.col-6<br/>Subsequent columns continue along the new line.</div>
                </div>
            </div> */}

    
            {/* <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div> */}
            
        </div>
    )
}

export default Info
