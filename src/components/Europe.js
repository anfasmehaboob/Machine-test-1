import React,{useEffect,useState} from 'react'

export default function Europe() {
   
    const [countys, setcountys] = useState([])

       async function fetchcountry() {
      const response = await fetch('https://restcountries.com/v2/all',{method:'GET'})
      const datas = await response.json() 
      
      setcountys(datas)
        

    }
    useEffect(() => {
        fetchcountry()
          
       }, [])

    const rendercountry = countys.filter( contry => contry.region === 'Europe').map( (country) =>{
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


    return (
        <div className="europe">

            <div className="container">
            <div className="row justify-content-between">
                {rendercountry}
            </div>
            </div>
            
        </div>
    )
}


