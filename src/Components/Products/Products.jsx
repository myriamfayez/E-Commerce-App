import React, { useEffect  , useState} from 'react'
import style from './Products.module.css'
import axios from 'axios'

export default function Products() {
const [Products,setProducts]=useState()
async function get (){

let {data}= await  axios.get('https://ecommerce.routemisr.com/api/v1/products')
console.log(data)
setProducts(data.data)
}




useEffect(()=>{
get()
})
  return (
    <>
      <div className="container">


<div className="row ">
  
{Products?.map((ele) =><div className="col-md-2 container">


<img src={ele.imageCover} width={'85%'}/>
<p>{ele.title}</p>
{/* <h3>{ele.slug}</h3> */}
<div className="d-flex justify-content-between">


  <p>{ele.price}EGP </p>
  <p className='fa-fa-star'>{ele.ratingsAverage}</p>
</div>
   
</div>


)}



</div>


      </div>
    </>
  )
}
