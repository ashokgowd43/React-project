import React from 'react'
import men1 from './images1/men1.jpg'
import { Link } from 'react-router-dom';
 
 function  Maincard() {
   return (
    <div className='maincard'>
    <div className="row">
      <div className="col-md-1">
      <img src={men1} alt="" style={{width:"60px",height:"60px"}} />
      </div>
      <div className="col-lg-5"> 

      <img src={men1} alt="" className='w-100' />

      </div>
      {/*  */}
      <div className="col-lg-4">
        <Link to=""  className='link'>Visit the Lux Cozi Store</Link>
         <h4>
         
         Lux Cozi Men's Regular Fit Polo Neck Half Sleeve Solid Casual T-Shirt | Polo T-Shirt for Men
         </h4>
           <Link to="" className='link'>1,543 ratings </Link>    |<Link to="" className='link'> Search this page</Link> <br /> <Link to="" className='link'>  in Men's T-Shirts</Link> <br /> <br /> <Link to="" className='link'>500+ bought in past month</Link>
         <hr />

         <div className="cost">
         <button className='btn bg-danger text-white'>Limited time deal</button> <br />
          
         <span className='h5 text-danger'>-16%</span>  <span className='h3'><sup>$</sup>370</span>
         <br />
         <span style={{color:"gray"}}>M.R.P <del>499</del></span> <br />
         <p style={{color:"gray"}}>Inclusive of all taxes</p>
        </div>
        <hr />

         <div className="offers">
         <h5 className=''> Offers</h5>
           <br /> 
         <div className="row">
          <div className="col-sm-5">
            <h6>Bank Offer</h6>
            <p>
              Upto ₹31.90 discount on select Credit Cards, ICICI Bank Debit CardsUpto ₹31.90 discount on select…</p>
            <Link to="" className='link'>3 offers</Link>
          </div>
          <div className="col-1"></div>
          <div className="col-sm-5">
            <h6>Partner Offers</h6>
            <p>
              Get GST invoice and save up to 28% on business purchases. Sign up for freeGet   save up to 28% on…</p>
            <Link to="" className='link'>1 offer</Link>
          </div>
         </div>
       
         </div>

         <hr />

         <div className="sizes">
          <h6>Sizes:</h6>
          <select name="options" style={{width:"60px" }}> 
            
            <option value="option1">Select</option>
            <option value="option1">L</option>
            <option value="option2">M</option>
            <option value="option3">S</option>
            <option value="option1">sm</option>
            <option value="option1">XL</option>
            <option value="option1">XXL</option>
          </select>

          <div className="images">

          </div>
            
         </div>



      </div>
      {/*  */}

      <div className="col-lg-2">
        <div className="card-a">
          <h4><sup>$</sup>370 <sup>00</sup></h4>
          <Link to="" id='free'>FREE delivery</Link> <span>Sunday, 12 July</span>
          <p>on Orders dispatched by <br /> Amazon over <sup>$</sup>499. <Link to="" className='link'>Details</Link> </p> <br />
          <p>Or Fastest delivery <h6>tomorrow, 10 May. Order Within </h6><span className='time'>7 hrs 36 mins. </span>  <Link to="" className='link'>Details</Link></p>
            <br />
          <h6 className='text-success'>In Stock</h6>
          <span>Ships From</span> <span className='stock'>Amazon</span> <br />
          <span>Sold by</span> <Link to="" className='stock link' id=''>Cocoblu Retail</Link>

          <br /> <br />
          <h6>Quantity:</h6>
          <select name="options" style={{width:"60px" }}> 
            
            <option value="option1">1</option>
            <option value="option1">2</option>
            <option value="option2">3</option>
            <option value="option3">4</option>
            <option value="option1">5</option>
            <option value="option1">6</option>
          </select>
          <br /><br />

          <button className='add btn' > <Link to="#" className='addd'>Add To Card</Link></button> <br/><br />

          <button className='buy btn' ><Link to="/buy" className='buyy'>Buy now</Link></button>

        </div>

      </div>
      {/*  */}
    </div>

    

   </div>





   );
 }
 
 export default  Maincard;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
//  import React from 'react'
 
//  function Maincard() {
//    return (
//      <div>


//      </div>
//    )
//  }
 
//  export default Maincard;