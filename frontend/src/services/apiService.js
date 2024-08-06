import axios from 'axios';

const apiService = {
    getReports: async () => {
        const response = await axios.get('/api/reports');
        return response.data;
    },
    createReport: async (report) => {
        const response = await axios.post('/api/reports/generate', report);
        return response.data;
    }
};

export default apiService;
