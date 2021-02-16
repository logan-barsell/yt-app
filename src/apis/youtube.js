import axios from 'axios';


const KEY = 'AIzaSyA16CIbqVKE3L3B9mFl9w5klrp3tUQNhxc';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});