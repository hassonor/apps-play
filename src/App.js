import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import NotFound404 from "./pages/NotFound404/NotFound404";
import {AppsProvider} from "./context/googleApps/GoogleAppsContext";
import {AlertProvider} from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert/Alert";
import AppDetails from "./pages/AppDetails/AppDetails";


function App() {
    return (
        <AppsProvider>
            <AlertProvider>
                <Router>
                    <div className="flex flex-col justify-between h-screen">
                        <Navbar/>
                        <main className='container mx-auto px-3 pb-12'>
                            <Alert/>
                            <Routes>
                                <Route path='/' element={<Home/>}/>
                                <Route path='/about' element={<About/>}/>
                                <Route path='/app/:name' element={<AppDetails/>}/>
                                <Route path='/notfound' element={<NotFound404/>}/>
                                <Route path='/*' element={<NotFound404/>}/>
                            </Routes>
                        </main>
                        <Footer/>
                    </div>
                </Router>
            </AlertProvider>
        </AppsProvider>
    );
}

export default App;
