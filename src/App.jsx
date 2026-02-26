import { useState } from "react"

function App() {
 const[count,setCount]=useState(0)

 let increment=()=>{
   count === 10 ? setCount(count) : setCount(count+1);
 }
  let decrement =()=>{
    count ===0 ? setCount(count) : setCount(count-1);
  }
  const reset =()=>{
    setCount(0)
  }
  return (
  
      <div className='min-h-screen flex-items-center justify-center bg-stone-600 '>
      
 <div className=" font-inter text-center">

        <h1 className="text-3xl font-bold text-white mb-8 tracking-wide">
          Counter
        </h1>
     <p className="text-7xl font-bold text-white mb-10 transition-all duration-300">
          {count}
        </p>
    
        <div className="flex gap-6 justify-center"> 
        <button
            onClick={increment}
            className="px-6 py-3 rounded-xl bg-white text-purple-700 font-bold text-xl 
                       cursor-pointer hover:scale-110 hover:bg-purple-100 
                       active:scale-95 transition-all duration-200 shadow-lg"
          >
            +
          </button>

          <button
            onClick={decrement}
            className="px-6 py-3 rounded-xl bg-white text-purple-700 font-bold text-xl 
                       cursor-pointer hover:scale-110 hover:bg-purple-100 
                       active:scale-95 transition-all duration-200 shadow-lg"
          >
            -
          </button>
        <button
            onClick={reset}
            className="px-6 py-3 rounded-xl bg-white text-purple-600 font-bold text-lg 
                       cursor-pointer hover:scale-110 hover:bg-red-600 
                       active:scale-95 transition-all duration-200 shadow-lg"
          >
            Reset
          </button>
       
    </div>
</div>



 







      </div>
        
    
  )
}

export default App
