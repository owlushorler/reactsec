import { useEffect, useState } from "react";
import op from './image/6714978.png'
import opp from './image/4808961-200.png'
import './ac.css'
import Filte from "./filter";
import Mapp from "./aa";
import store from "./store";
import {useSelector} from "react-redux"



function App() {
  const [coun,setcount]=useState(true)
  const [count,setcountt]=useState(true)
  const [co,setcoun]=useState([])
  const [we,setwe]=useState(["loading..."])
  const display = useSelector((state)=>state.dis)

  
 

 
  
  

  
let style={
  backgroundColor:"hsl(209, 23%, 22%)",
  color:"hsl(0, 0%, 100%)",
  fontFamily: 'Nunito San'
  
}
let sty={
backgroundColor:" hsl(0, 0%, 100%)",
color:"hsl(200, 15%, 8%)",
fontFamily: 'Nunito San'
}

let styl={
  backgroundColor:"hsl(207, 26%, 17%)",
  color:"hsl(0, 0%, 100%)",
  fontFamily: 'Nunito San'
  
}


let s={
  backgroundColor:"hsl(0, 0%, 98%)",
  color:"hsl(200, 15%, 8%)",
  fontFamily: 'Nunito San'
  }




 

  useEffect(()=>{
    fetch("https://restcountries.com/v3.1/all")
    .then(res=>res.json())
    .then(data=>(setcoun(data),console.log(data[0].flags)))
    
  },[])
 
    
  const hopp = co.map(ele=>{
    return(
      <div className="gri" style={display?style:sty} >
          
    <div className="o" >
    <img className="o" src={ele.flags.svg} alt=""/>
  
    </div>

 <div className="gr" > 
   <h4>{ele.name.common}</h4>
   <p>population: {ele.population}</p>
   <p>Region: {ele.region}</p>
   <p>Capital:{ele.capital}</p>
    
 </div>
 </div>
    )
  }

   
  
 )


 // filyer
 function got(lol){

  
  let ap= co.filter(ele=> ele.region == lol)
  setwe(ap.map(ele=>

      <div className="gri" style={display?style:sty} >
            
      <div className="o" >
      <img className="o" src={ele.flags.svg} alt=""/>
    
      </div>
  
   <div className="gr" > 
     <h4>{ele.name.common}</h4>
     <p>population: {ele.population}</p>
     <p>Region: {ele.region}</p>
     <p>Capital:{ele.capital}</p>
      
   </div>
   
   </div>
   ))
   

 

}



function light (){
  
  store.dispatch({
    type:"ligt"
  })
  
  
}

function dark (){
  
  store.dispatch({
    type:"dark"
  })
  
  
}
//console.log(display)



  return (
    <div className="App">
      
     
      <div> 

          <div  style={display?style:sty} className="aa"  >
            <p>where is the world?</p>
            <section  >
          {display &&  <img onClick={()=>light()}  className="ab" src={op} alt=""/>}{display && <   > dark mode</>}  
          {!display && <img onClick={()=>dark()} className="ab" src={opp} alt=""/> } {!display && <>light mode</>} 
            </section>
          </div>
         
      </div>
      
      <div >

        <div style={display?styl:s} >
        <div className="qq" style={display?styl:s}  >
       {/* <input style={coun?style:sty} className="as"
         onChange={e=>got(e.target.value)} />*/}
        <select style={display?style:sty} className="kk" onChange={e=>got(e.target.value)} onClick={()=>setcountt(false)} >  
           <option value="Africa"  >filter by region</option>
           <option  >Africa</option>
           <option >Asia</option>

           <option>Europe</option>
           <option>Oceania</option>
           <option>Americas</option>
          
        </select>
        </div>
        </div>


     {!count && <div className="grip-all" style={display?styl:s} >
        <button style={display?style:sty} onClick={()=>setcountt(ele=>ele?false:true)} >back </button>
        <div style={display?styl:s} className="grip">

          {we}
         
        </div>
        </div>}
      </div>
     
      
        <div className="grip-a" >

       <div style={display?styl:s} className="grip">
      
      {count && hopp}
      
        
       </div>
       </div>

      
    </div>
  );
}

export default App;
