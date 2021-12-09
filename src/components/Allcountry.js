import React,{useEffect,useState} from 'react'

export default function Allcountry() {


    const [countys, setcountys] = useState([])

       async function fetchcountry() {
      const response = await fetch('https://restcountries.com/v2/all',{method:'GET'})
      const datas = await response.json() 
      
      setcountys(datas)
        

    }

    const rendercountry = countys.map( (country) =>{
        return(
            <div className="  my-3 p-3 cu_border" key={country.numericCode}>
                <div className="row ">
                    <div className="col-4">
                        <img className="w-100" src={country.flag} alt="" />
                    </div>
                    <div className="col-7">
                        <p className="countryname">{country.name}</p>
                        <p className="country_region">{country.region}</p>
                    </div>
                </div>
            </div>
        )
    })



    
        
       useEffect(() => {
        fetchcountry()
          
       }, [])

    return (
        <div className="allcountry">

            <div className="container">
            <div className="row justify-content-between">
                {rendercountry}
            </div>
            </div>
            
        </div>
    )
}
