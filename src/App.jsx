import {Route, BrowserRouter as Router, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import AdmissionPage from "./pages/AdmissionPage"
import CoursesPage from "./pages/CoursesPage"
import ContactPage from "./pages/ContactPage"
import NotfoundPage from "./pages/NotFoundPage"
import './styles/Pages.css'

const App =() =>
{
  return(
    <>
    
   <Router>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path ="/home" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/admission" element={<AdmissionPage/>}/>
            <Route path="/course" element={<CoursesPage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
            <Route path="/NotFound" element={<NotfoundPage/>}/>
        </Routes>
      </Router>
   
         </>
  )
}

export default App