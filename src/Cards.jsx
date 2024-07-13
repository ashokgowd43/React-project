import React, { useState, useEffect } from 'react';
import { Link,Outlet } from 'react-router-dom';




const URL = "https://fakestoreapi.com/products";

function Cards() {
    const [userData, setUserData] = useState([]);

    const fetchUserData = async (apiURL) => {
        try {
            const response = await fetch(apiURL);
            const data = await response.json();
            setUserData(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUserData(URL);
    }, []);

    return (
        
        <div className="container mt-5">
            
            <div className="row">
                {userData.map((eachUser) => {
                    const { id, title, price, category, rating, image } = eachUser;
                    return (
                        
                        <div className="col-lg-4 col-md-6" key={id}>
                            <Link to="/main">
                            <div className="card mb-4">
                                <img src={image} alt={title} className="card-img-top" style={{ maxHeight: "200px", objectFit: "cover" }} />
                                <div className="card-body">
                                    <h6 className="card-title">{title}</h6>
                                    <p className="card-text">Price: ${price}</p>
                                    <p className="card-text">Category: {category}</p>
                                    <p className="card-text">Rating: {rating.rate}</p>
                                </div>
                            </div>
                            </Link>
                           
                        </div>
                      
                      
                    );
                })}
            </div>
            
          
           <Outlet/>
            
        </div>
        
        
    );
}

export default Cards;
