import React, { use, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from '../store/productSlice';

const HomeScreen = ()=>{
    const dispatch = useDispatch();
    const {items, loading, error} = useSelector(state => state.items);
}   

useEffect(()=>{
    dispatch(fetchProducts());
}, [dispatch]);

return (    
    <div>
        <h1>New Arrivals</h1>

        {/* three stages of promise handling */}
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
            <div>
                {items.map(item => (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>${item.price}</p>
                        <button>Add to Cart</button>
                    </div>
                ))}
            </div>
        )}
    </div>
);