import axios from "axios";
import {Google_Books_BaseURL} from "../../configure"

export default axios.create({
    baseURL:Google_Books_BaseURL,
    params:{
        maxResults:15
    }
})