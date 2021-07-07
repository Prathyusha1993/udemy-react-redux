import axios from "axios";

const KEY = 'AIzaSyCXxSlkH1v2boqNl8lZZa2IrFuzt3NwCw4';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});