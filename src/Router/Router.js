import { BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeCript from '../pages/HomeCript'
import Info from '../pages/Info'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<HomeCript/>}>
                    <Route path=':id' element={<Info/>} />
                </Route>
                <Route path='*' element={<HomeCript/>} />
            </Routes>
        
        </BrowserRouter>
    )
}

export default Router
