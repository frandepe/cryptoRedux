 import { useEffect, useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { getCriptoActions } from "../redux/apiCrypto";
 import { Outlet } from "react-router"
 // import { Link } from "react-router-dom"
 import Loading from '../components/Loading/Loading'
 // import { getIdActions } from "../redux/infoCripto";
 import { useNavigate } from 'react-router';
 import './HomeCript.css'

const HomeCript = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {cryptos} = useSelector(state => state.cryptos);
    // const {crypto} = useSelector(state => state.crypto);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(null);

    const onGoBack = () => {
        if(page > 1){
            setPage(page-1);
        }
    }
    
    const onGoAhead = () => {
            setPage(page+1);
    }

    const pageNum1 = () => {
            setPage(1);
    }

    const pageNum2 = () => {
            setPage(2);
    }

    const pageNum3 = () => {
            setPage(3);
    }

    

    useEffect(() => {
        setLoading(true)
        dispatch(getCriptoActions(page))
  }, [page])

    return (
        <div>
            <h1>Criptomonedas</h1>
            <Outlet/>
            <nav className="paginado d-flex justify-content-center" aria-label="Page navigation example">
                <ul className="pagination">
                    <li onClick={onGoBack} className="page-item"><a className="page-link" href="#">Previous</a></li>
                    <li onClick={pageNum1} className="page-item"><a className="page-link" href="#">1</a></li>
                    <li onClick={pageNum2} className="page-item"><a className="page-link" href="#">2</a></li>
                    <li onClick={pageNum3} className="page-item"><a className="page-link" href="#">3</a></li>
                    <li onClick={onGoAhead} className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
            </nav>
            {loading ?
             <table className="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Moneda</th>
                    <th scope="col">Precio Actual</th>
                    <th scope="col">Capitalizacion de mercado</th>
                    <th scope="col">Volumen en 24hs</th>
                    <th scope="col">Porcentaje de cambio de precio</th>
                    </tr>
                </thead>
                <tbody>
                    {cryptos.map(p => {
                    return <tr className='fila' key={p.id}>
                    <th scope="row">{p.market_cap_rank} - <img onClick={() => navigate(`/home/${p.id}`)} className='imgBtc' src={p.image} alt='foto'/></th>
                    {/* <Link to='/home/info'>{p.id}</Link> */}
                    {/* <p onClick={() => navigate(`/home/${p.id}`)}>{p.id}</p> */}
                    <td>{p.name}</td>
                    <td>{p.current_price} US$</td>
                    <td>{p.market_cap}</td>
                    <td>{p.total_volume}</td>
                    <td>{p.price_change_percentage_24h}</td>
                    </tr>
                    
                    })}
                    
                </tbody>
                
                    
                
            </table>
            :<Loading/>}
           
        </div>
    )
}

export default HomeCript
