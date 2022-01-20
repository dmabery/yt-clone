import axios from 'axios';

const KEY =  'AIzaSyDSN69nfMKsrmInU7_gwjUa8I_WDXNjodA';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: KEY
    }
});