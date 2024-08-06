import React from 'react';
import { Cartogram } from 'react-cartogram'; 

const CartogramChart = ({ data }) => {
    return (
        <div>
            <h2>Cartogram</h2>
            <Cartogram
                data={data}
                
            />
        </div>
    );
};

export default CartogramChart;
