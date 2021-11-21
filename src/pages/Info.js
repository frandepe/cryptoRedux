import { useDispatch, useSelector } from "react-redux";
import { getIdActions } from "../redux/infoCripto";
// import { getCriptoActions } from "../redux/apiCrypto";
import { useEffect } from "react";
import { useParams } from 'react-router'

const Info = () => {

    const dispatch = useDispatch();
    const {id} = useParams()
    const {crypto} = useSelector(state => state.crypto);

    useEffect(() => {
        dispatch(getIdActions(id));
      }, [])

    return (
        <div>
            {/* <tfoot>
                <tr>
                    <td>{cryptos.name}</td>
                </tr>
            </tfoot> */}
            <p>{crypto.name}</p>
            <p>{crypto.symbol}</p>
            <p>{crypto.hashing_algorithm}</p>
            {/* <p>{crypto.description ? crypto.description.en : ''}</p> */}
            <p>{crypto.links ? crypto.links.homepage[0] : ''}</p>
            <p>{crypto.categories ? crypto.categories[0] : ''}</p>
            <p>{crypto.block_time_in_minutes}</p>

            {/* {crypto.map(p=> { return <p>{p.name}</p>})} */}
           
            
        </div>
    )
}

export default Info
