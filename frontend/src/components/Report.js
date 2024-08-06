import React from 'react';

const Report = ({ reportData, promotions }) => {
    return (
        <div>
            <h2>Report Summary</h2>
            <div>
                <h3>District: {reportData.district}</h3>
                <h4>State: {reportData.state}</h4>
                <ul>
                    {reportData.orders.map((order, index) => (
                        <li key={index}>
                            Product: {order.product}, Quantity: {order.quantity}
                        </li>
                    ))}
                </ul>
            </div>
            {promotions.length > 0 && (
                <div>
                    <h3>Promotion Suggestions</h3>
                    <ul>
                        {promotions.map((promotion, index) => (
                            <li key={index}>{promotion}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Report;
