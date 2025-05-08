import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact_us from "./pages/Contact-us"
import ProductsLayout from "./pages/Products/ProductsLayout"
import ProductsList from "./pages/Products/ProductsList"
import ProductDetail from "./pages/Products/ProductDetail"
import NotFound from "./pages/NotFound"
import "./App.css"
 
const App = () => {
  return (
    <div style={{
      margin: "3em"
    }}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="contact-us" element={<Contact_us/>}/>
          {/*Nested products Route*/}
          <Route path="/products" element={<ProductsLayout/>}>
            <Route index element={<ProductsList/>}/>
            <Route path=':id' element={<ProductDetail/>}/>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
