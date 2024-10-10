import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchClasses = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/classes`);
        return response.data;
    } catch (error) {
        console.error('Error fetching classes:', error);
        throw error;
    }
};
