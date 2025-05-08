import { useEffect, useState } from "react"
import type { Product } from "../../types/product"
import { Link } from "react-router-dom"
import {PacmanLoader} from "react-spinners"


const ProductsList = () => {
    const [products, setProducts] = useState<Product[] | null>()
    const [delay, setDelay] = useState<boolean>(true)

    useEffect(()=>{
        setProducts(null)
        const getProducts = async()=>{
            const res = await fetch("https://dummyjson.com/products")
            const data = await res.json()
            setProducts(data.products)
        }
        getProducts()
        setTimeout(() => {
            setDelay(false)
        }, 2000);
    },[])


    if(delay) return <PacmanLoader/>


  return (
    <div>
        <h1>Products List</h1>
        <section style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: '10px',
            textAlignLast: "center",
        }}>
            {products?.map(product=>(
                <article key={product.id}>
                    <Link style={{
                        listStyle: "none",
                        color: "whitesmoke",
                        width: "1rem",
                        borderBottom: "1px solid white"
                    }} to={`/products/${product.id}`}>
                        {product.title}
                    </Link>
                </article>
            ))}
        </section>
    </div>
  )
}

export default ProductsList