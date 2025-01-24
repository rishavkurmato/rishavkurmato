//useState is a hooks that allow you to have state variable in functional components
//use state return an array with two elements
//1st element is the current value of the state
//2nd element is a state function that allows you to update the value of the state
//usestate state ko manage karke ka kaam karta hain

// import React, { useState } from 'react'

//import { useState } from "react"

// const UseState = () => {
//         const[color,setColor] = useState('red')
//   return (
//     <div>
//       <h1>`my fav color is color`{color} </h1>
//      <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Click</button>
//     </div>
//   )
// }

// export default UseState

// import React,{ useState } from "react"
// function Car(){
//         const[brand,setBrand]= useState('Lamborghini')
//         const[year,setYear]= useState(2022)
//         const[price,setPrice]= useState(10000000)
//         const[model,setmodel]= useState('aventadoor')

//         return(
//                 <div>
//                         <h1>my fav {brand}</h1>
//                         <p>this is my {model} is and {price} and {year} </p>
//                 </div>
                
//         )
// }
// export default Car
//useeffect

//useEffect is a hooks that allow you to perform side effect in a fuctional components
//useEffect run after every render
//useEffect to follow the dependency array
//useEffect to run only once
//useEffect(<function>, <dependency>)
// import React,{ useEffect, useState } from "react"
// function Count(){
//         const[counter, setCounter]= useState('0')
//         useEffect(()=>{
//                 setTimeout(()=>{
//                         setCounter((counter)=>counter+1)
//                 },[1000])
//         })
//         return(
//                 <div>
//                         <h1>This is my {counter}</h1>
//                 </div>
//         )
// }
// export default Count

// import React,{useState, useEffect}from"react"
// function Counter(){
//         const [count,setCount]=useState(0)

//         const[calculation,setCalculation]= useState(0)
//         useEffect(()=>{
//                 setCalculation(count*4)
//         },[count])
//         return(
//                 <div>
//                         <h1>count{count+1}</h1>
//                         <button onClick ={()=>setCount(count+1)}>click me</button>
//                         <h2>calculation:{calculation}</h2>
//                 </div>  
//         )      
// }
// export default Counter

//useRef is a React Hook that lets you reference a value that’s not needed for rendering.
//useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
//useRef returns an object with a single property:
//useRef value ko persiset karne ke liye use huy hain

// import React,{useRef} from "react"
// function Ref(){

