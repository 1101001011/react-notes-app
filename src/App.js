import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/UI/navbar/MyNavbar';
import AlertState from './context/alert/AlertState';
import About from './pages/About';
import Main from './pages/Main';
import './styles/App.scss'

function App() {
    return (
        <AlertState>
            <BrowserRouter>
                <MyNavbar/>
                <div className='App'>
                    <Routes>
                        <Route path='/' exact element={ <Main/> }/>
                        <Route path='/about' exact element={ <About/> }/>
                    </Routes>
                </div>
            </BrowserRouter>
        </AlertState>
    );
}

export default App;
