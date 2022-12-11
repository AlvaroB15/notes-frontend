import axios from 'axios';

export const getTechnologyRequest = async () => {
    await axios.get('/technology')
}
