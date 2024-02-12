export const Exerciseoptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_Key_Rapid_api,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_Key_Rapid_api_YouTube,
    },
  };


  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };