import axios from 'axios';

const authService = {
    register: async (user) => {
        const response = await axios.post('/api/users/register', user);
        return response.data;
    },
    login: async (credentials) => {
        const response = await axios.post('/api/users/login', credentials);
        return response.data;
    }
};

export default authService;
