import React, { useState } from 'react'
import Allcountry from './Allcountry'
import Asia from './Asia'
import Europe from './Europe'
import Footer from './Footer'


export default function Home() {

    const initialState = 'All'

    const [contryRegion, setContryRegion] = useState(initialState)

    
  const AllcountryHandler = () =>{
        setContryRegion('All')
    }
    const AsiacountryHandler = () =>{
        setContryRegion('Asia')
        
    }
    const EuropecountryHandler = () =>{
        setContryRegion('Europe')
        
    }
    const Regison = () =>{
        if(contryRegion === 'All'){
            return <Allcountry />
        }else if(contryRegion === 'Asia'){
            return <Asia />
        }else if(contryRegion === 'Europe'){
            return <Europe />
        }
    }
    
    return (
        
        <React.Fragment>
              <div className="header">
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h3 className="navbar-brand" >Countries</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav custom_width me-auto mb-2 mb-lg-0">
        <li className="nav-item" onClick={AllcountryHandler}>
          <p className="nav-link " aria-current="page" >All </p>
        </li>
        <li className="nav-item" onClick={AsiacountryHandler}>
          <p className="nav-link" >Asia</p>
        </li>

        <li className="nav-item" onClick={EuropecountryHandler}>
          <p className="nav-link" >Europe</p>
        </li>
       
        
      </ul>
     
    </div>
  </div>
</nav>
            </div>
        <div className="datas">

          {Regison()}
            
        </div>
        <Footer />
        </React.Fragment>
    )
}
