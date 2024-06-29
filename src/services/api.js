const KEY = "be751ea5953d4545b5a12215242906";

async function fetchData(city) {
     const URL = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

     const fetchResponse = await fetch(URL);
     const data = await fetchResponse.json();

     return data;
}

export default fetchData;