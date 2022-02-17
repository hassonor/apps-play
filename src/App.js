import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound404 from "./pages/NotFound404";
import {AppsProvider} from "./context/googleApps/GoogleAppsContext";
import {AlertProvider} from "./context/alert/AlertContext";
import Alert from "./components/layout/Alert";



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
                                {/*<Route path='/app/:id' element={<App/>}/>*/}
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