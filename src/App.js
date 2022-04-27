import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MyNavbar from './components/UI/navbar/MyNavbar';
import AlertState from './context/alert/AlertState';
import FirebaseState from './context/firebase/FirebaseState';
import About from './pages/About';
import Main from './pages/Main';
import './styles/App.scss'

function App() {
    return (
        <FirebaseState>
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
        </FirebaseState>
    );
}

export default App;
