import React from 'react';
import img1 from './images1/amazon-2.png'

function Amazon() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg   pt-4 pb-4">
  <div className="container-fluid">
    <a className="navbar-brand  " to="#"> 
    <img src={img1} alt=""  style={{width:'90px',height:'30px'}}/>
    
    </a>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link"  to="#" id='loction' > Location</a>
        </li>
        {/* <li className="nav-item">
          <a className="nav-link" to="#">Link</a>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="#">Action</a></li>
            <li><a className="dropdown-item" to="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="#">Something else here</a></li>
          </ul>
        </li> */}

        {/* <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> */}

        <form className="d-flex" role="search">
         
        <select name="options" style={{width:"60px", marginRight:"10px", fontSize:"15px"}}> 
            <option value="option1">All</option>
            <option value="option1">Amazon Fashions</option>
            <option value="option1">Womens Dress</option>
            <option value="option2">Mens Dress</option>
            <option value="option3">Fashion Dress</option>
            <option value="option1">Baby</option>
            <option value="option1">Books</option>
            <option value="option1">Elactronics</option>
          </select>
  
        <input className="form-control me-2 w-150" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      {/* <li className="nav-item">
          <a className="nav-link" to="#">Counters</a>
      </li> */}

        {/* <li className="nav-item dropdown " id='all'>
          <a className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" id='drop' >
            
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" to="#"><input type="radio" name="" id="" /> Hindi</a></li>

            <li><hr className="dropdown-divider bg-success"/></li>
            <li><a className="dropdown-item" to="#"><input type="radio" name="" id="" /> Tamil</a></li>

            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="#"><input type="radio" name="" id="" /> Kanada </a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="#"><input type="radio" name="" id="" /> Malayaalam </a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="#"><input type="radio" name="" id="" />Urdhu</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" to="#"><input type="radio" name="" id="" /> Maraati</a></li>
            <li><hr className="dropdown-divider"/></li>
          </ul>
        </li> */}

        <select name="options" style={{width:"95px",marginLeft:"20px",fontSize:"16px",   }}> 
            <option value="option1">English</option>
            <option value="option1"> <input type="radio" name="" id="" /> Telugu</option>
             
            <option value="option1">Hindi</option>
            <option value="option2">Kanada</option>
            <option value="option3">Thamil</option>
            <option value="option1">Marati</option>
            <option value="option1">Malayaalam</option>
            <option value="option1">Bengali</option>
          </select>
  



      <li className="nav-item">
          <a className="nav-link" to="#">Sing & Sing up Accounts</a>
      </li>
      <li className="nav-item">
          <a className="nav-link" to="#">Return Orders</a>
      </li>  
      <li className="nav-item">
          <a className="nav-link" to="#">Cart</a>
      </li> 
      </ul>

    </div>
  </div>
</nav>
         
    </div>
  )
}

export default Amazon;
 