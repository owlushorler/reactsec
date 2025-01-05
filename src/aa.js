import { useEffect, useState } from "react";
import axios from 'axios';  

import './ac.css'


function Mapp(){
    const [coun,setcount]=useState(true)
    const [co,setcoun]=useState([])
    const [we,setwe]=useState(["loading>>>"])
    const [date, setDate] = useState(null);  
    const [loading, setLoading] = useState(true);  
    const [error, setError] = useState(null);
    

    

    useEffect(()=>{
       // fetch("https://restcountries.com/v3.1/all")
       // .then(res=>res.json())
      //  .then(data=>(setcoun(data),console.log(data[0].flags)))

            // Function to fetch date  
    const fetchDate = async () => {  
      try {  
        // Replace with your actual API endpoint  
        const response = await axios.get('https://restcountries.com/v3.1/all');  
        
        // Set the date from the API response  
        setcoun(response.data);  
        setLoading(false);  
      } catch (err) {  
        // Handle any errors  
        setError(err.message);  
        setLoading(false);  
      }  }


      fetchDate()


        
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
      

let hopp = co.map(ele=>{
    return(
      <div className="gri" style={coun?style:sty} >
          
    <div className="o" >
    <img className="o" src={ele.flags.svg} alt=""/>
  
    </div>

 <div className="gr" > 
   <h4>{ele.name.common}</h4>
   <p>population:{ele.population}</p>
   <p>Regions: {ele.region}</p>
   <p>Capital:{ele.capital}</p>
    
 </div>
 </div>
    )
  }
  
   
  
 )

 

return(
    <div>{we}</div>
)


}

export default Mapp