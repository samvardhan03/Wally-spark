import React, { useEffect, useState } from 'react';
import { Bar, Pie, Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import MapChart from './MapChart';
import apiService from '../services/apiService';


Chart.register(...registerables);

const Dashboard = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const data = await apiService.getReports();
                setReports(data);
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };

        fetchReports();
    }, []);

    const chartData = {
        labels: reports.map(report => report.district),
        datasets: [
            {
                label: 'Number of Products Ordered',
                data: reports.map(report => report.orders.length),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    return (
        <div>
            <h1>Dashboard</h1>
            <Bar data={chartData} />
            <Pie data={chartData} />
            <Line data={chartData} />
            <MapChart data={chartData} />
        </div>
    );
};

export default Dashboard;
