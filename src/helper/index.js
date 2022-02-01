import axios from "axios";

export const getDataFromFlickr = (pageNum, callBack) => {
    let baseURL = 'https://www.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&api_key='
        baseURL += '93a11d9f7ec81c221c7e292e080cd430' + '&group_id=96697731%40N00&per_page=';    // Group ID Hard coded
        baseURL += '20' + '&format=json&page='; // per page
        baseURL += pageNum + '&nojsoncallback=1'; // current page
        axios.get(baseURL).then((response) => {
            callBack(response);
        });
}