//TODO: USE YOUR OWN API KEY
const API_KEY = 'KEY';

const getCurrent = () => 
    fetch(`https://api.weatherapi.com/v1/current.json?q=brisbane&key=${API_KEY}`)
    .then((res) => res.json());

export default getCurrent;