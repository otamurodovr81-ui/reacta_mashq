// components

import { useState } from "react"
import { Cards } from "./cards"
import Com from "./components1"


// class components  and functional components
const arr = [
  {
    id: 1,
    title: "Title",
    desc: "desc-1",
    img:"https://cdn.lifehacker.ru/wp-content/uploads/2018/03/DeepDishApplePie_1280_1522932474-e1522932518660.jpg"
  },
  {
    id: 2,
    title: "Title",
    desc: "desc-1",
    img:"https://cdn.lifehacker.ru/wp-content/uploads/2018/03/DeepDishApplePie_1280_1522932474-e1522932518660.jpg"
  },
  {
    id: 3,
    title: "Title",
    desc: "desc-1",
    img:"https://cdn.lifehacker.ru/wp-content/uploads/2018/03/DeepDishApplePie_1280_1522932474-e1522932518660.jpg"
  },
]


// 1-export import tushunchasini yaxshi bilishi kerak 
// componnets => 
// fack data yozib shu bo'yi

// useState

// let a = 90;

// function setA() {
//   a++;
// }



function News() {
  return <div><h1>Lorem ipsum dolor sit.</h1>
    {
      arr.map(item => <Cards item={item} key={item.id}/>)
    }
    
    <h1>adsfbds {67 + 34}</h1>
    

   <Com/>

  </div>
}

export default News