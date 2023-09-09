import axios from "axios";
import toast from 'react-hot-toast';

const KEY = "38314645-d57637d53f9e89632580f05c8"
axios.defaults.baseURL = `https://pixabay.com/api/`;

export default async function getImages (query, page) {
    try {
        const fetchedImages = await axios.get(`?key=${KEY}&q=${query.split('/')[1]}&page=${page}&per_page=12&image_type=photo&orientation=horizontal`);
        return fetchedImages.data;
    } catch (error) {
        toast.error(error)
    }
  }