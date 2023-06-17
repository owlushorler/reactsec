import { useEffect, useState } from "react";
import op from './image/6714978.png'
import opp from './image/4808961-200.png'
import './ac.css'



function Filte(){
    const [coun,setcount]=useState(true)
    const [co,setcoun]=useState([])
    const [we,setwe]=useState(["lovdvd"])

    

    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=>res.json())
        .then(data=>(setcoun(data),console.log(data[0].flags)))
        
      },[])

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
      function got(lol){
        let ap= co.filter(ele=> ele.region == lol)
        setwe(ap.map(ele=>

            <div className="gri" style={coun?style:sty} >
                  
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
         

       console.log(ap)  

      }
    



    return(
        <div>
        <input/>
        <select onChange={e=>got(e.target.value )}  >  
           <option  >filter by region</option>
           <option>Africa</option>
           <option >Asia</option>

           <option>Europe</option>
           <option>Oceania</option>
           <option>Americas</option>
           <option>all</option>
        </select>

        <div style={coun?styl:s} className="grip">

            
            {we}
        </div>

      </div>


    )
}



export default Filte