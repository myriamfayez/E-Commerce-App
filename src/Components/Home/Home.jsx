import React from 'react'
import style from './Home.module.css'
import sora from '../../Assets/bags.jpg'
import music from '../../Assets/music.jpg' 
import gold from  '../../Assets/gold.jpg'
import chair from  '../../Assets/chair.jpg'
import bag from  '../../Assets/bag.jpg'
import Products from '../Products/Products'

export default function Home() {
  return (
    <>
      <h1>Homeeeeeee</h1>
      <div className={` row container ${style.main}`}>

<div className={`  col-md-6 my-5 main ${style.main}`}>

 
<div id="carouselExampleIndicators" className="carousel slide ">
  <div className= {` carousel-indicators bg-dark w-25 ${style.mkan}`}>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className={`active ${style.btn}`} aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" className={` slide 2 ${style.btn}`} ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className={` slide 3 ${style.btn}`}  ></button>
  </div>
  <div className="carousel-inner bg-danger">
    <div className="carousel-item active">
      <img src={gold} className=" w-50 h-100 "  alt="gold" />
    </div>
    <div className="carousel-item">
      <img src={chair} className=" w-75 h-100"  alt="baby chair"/>
    </div>
    <div className="carousel-item">
      <img src={bag} className=" w-75 h-100" alt="bag"/>
    </div>
  </div>
  
</div>

</div>




<div className="col-md-3 my-5 ">

 <img src={sora} />
 <img src={music}/>

</div>


      </div>














<Products/>

      
    </>
  )
}
