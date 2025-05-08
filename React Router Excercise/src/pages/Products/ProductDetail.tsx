import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { Product } from "../../types/product"
import {PacmanLoader} from "react-spinners"

const ProductDetail = () => {
    const [product, setProduct] = useState<Product | null>()
    const [delay, setDelay]= useState<boolean>(true)
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        setProduct(null)
        const getProductById = async () =>{
            const res = await fetch(`https://dummyjson.com/products/${id}`)
            const data = await res.json()
            setProduct(data)
        } 
        getProductById() 
        setTimeout(() => {
            setDelay(false)
        }, 2000);
    },[id])
    
    const handdleBack = ()=>{
        navigate('/products')
    }

    if(delay) return <PacmanLoader/>

  return (
    <div>
        <h1>{product?.title}</h1>
        <p>{product?.description}</p>
        <div>
            <p>${product?.price}</p>
            <p>{product?.category}</p>
        </div>
        <button type="button" onClick={handdleBack}>Go back</button>
    </div>
  )
}

export default ProductDetail