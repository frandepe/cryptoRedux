 import { useEffect, useState } from "react";
 import { useDispatch, useSelector } from "react-redux";
 import { getCriptoActions } from "../redux/apiCrypto";
 import { useNavigate, Outlet } from 'react-router';
 import { getIdActions } from "../redux/apiCrypto";
 import Loading from '../components/Loading/Loading'
 import './HomeCript.css'
import AboutMe from "../components/AboutMe";
 // import { Link } from "react-router-dom"

const HomeCript = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {cryptos} = useSelector(state => state.cryptos);
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

    const getInfoById = (id) => {
        if (dispatch(getIdActions(id))){
            navigate(`/home/${id}`)
        }
        document.documentElement.scrollTop=0;
    }

    useEffect(() => {
        setLoading(true)
        dispatch(getCriptoActions(page))
  }, [page])

    return (
        <div>
            <Outlet/>
            <h3 className='p-3'>Si quieres saber más información sobre una moneda, haz click en su logo</h3>
            <nav className="paginado p-3 d-flex justify-content-center" aria-label="Page navigation example">
                <ul className="pagination">
                    <li onClick={onGoBack} className="page-item"><a className="page-link">Previous</a></li>
                    <li onClick={pageNum1} className="page-item"><a className="page-link">1</a></li>
                    <li onClick={pageNum2} className="page-item"><a className="page-link">2</a></li>
                    <li onClick={pageNum3} className="page-item"><a className="page-link">3</a></li>
                    <li onClick={onGoAhead} className="page-item"><a className="page-link">Next</a></li>
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
                    <th scope="row">{p.market_cap_rank} - <img onClick={() => {getInfoById(p.id)}} className='imgBtc' src={p.image} alt='foto'/></th>
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
            <AboutMe/>
        </div>
    )
}

export default HomeCript
