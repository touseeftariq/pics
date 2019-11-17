import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7bbc8e3e820da88ac38364c2e89399edc88749dec202187a063fa4d4081afc9a'
    }
})