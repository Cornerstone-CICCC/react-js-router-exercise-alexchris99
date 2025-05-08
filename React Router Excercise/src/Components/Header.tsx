import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div style={{
      width: "auto",
    }}>
        <nav>
            <menu style={{
              display: "flex",
              flexDirection: "row",
              listStyle: "none",
              justifyContent: "space-around",
            }}>
                <li><Link style={{
                  color: "white",
                  padding: "12px",
                  borderRadius: "5px", 
                  border: "1px solid white"
                  }} to="/">Home</Link></li>
                <li><Link style={{color: "white",
                  padding: "12px",
                  borderRadius: "5px", 
                  border: "1px solid white"}} to="/about">About</Link></li>
                <li><Link style={{color: "white",
                  padding: "12px",
                  borderRadius: "5px", 
                  border: "1px solid white"}} to="/contact-us">Contact-us</Link></li>
                <li><Link style={{color: "white",
                  padding: "12px",
                  borderRadius: "5px", 
                  border: "1px solid white"}} to="/products">Products</Link></li>
            </menu>
        </nav>
    </div>
  )
}

export default Header