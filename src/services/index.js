import {data} from '../data/playlist';

let API_LIST = {
   // SEARCH: `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${channelID}&part=snippet,id&order=date&maxResult=20`,
   //SEARCH: data,
};

export const searchVideos = async () => {
    const url = API_LIST.SEARCH;   
    console.log("url", url);
    //const response = await (fetch(url).then((response) => response.json()));
    const response = data;
    //console.log("response", response);
    
    if(response && response){
        return response;
    } else if(response && response.errors){
        return {error: true, message: response.message};
    }  
    return response; 
}