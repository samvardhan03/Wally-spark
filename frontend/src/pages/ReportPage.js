import React, { useState } from 'react';
import apiService from '../services/apiService';

const ReportPage = () => {
    const [district, setDistrict] = useState('');
    const [state, setState] = useState('');
    const [orders, setOrders] = useState([{ product: '' }]);
    const [promotions, setPromotions] = useState([]);

    const handleOrderChange = (index, field, value) => {
        const newOrders = [...orders];
        newOrders[index][field] = value;
        setOrders(newOrders);
    };

    const addOrder = () => {
        setOrders([...orders, { product: '' }]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const report = await apiService.createReport({ district, state, orders });
            alert('Report generated successfully');
            setPromotions(report.promotions);
        } catch (error) {
            console.error('Error generating report', error);
        }
    };

    return (
        <div>
            <h1>Create Report</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>District</label>
                    <input type="text" value={district} onChange={(e) => setDistrict(e.target.value)} required />
                </div>
                <div>
                    <label>State</label>
                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
                </div>
                {orders.map((order, index) => (
                    <div key={index}>
                        <label>Product</label>
                        <input
                            type="text"
                            value={order.product}
                            onChange={(e) => handleOrderChange(index, 'product', e.target.value)}
                        />
                    </div>
                ))}
                <button type="button" onClick={addOrder}>Add Order</button>
                <button type="submit">Generate Report</button>
            </form>
            {promotions.length > 0 && (
                <div>
                    <h2>Promotion Suggestions</h2>
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

export default ReportPage;
