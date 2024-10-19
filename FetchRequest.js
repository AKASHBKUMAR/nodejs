const API_KEY = "23275a25c977dca792d6125188bd27c3";
const getData = () =>
{
  const promise = fetch(`https://api.countrylayer.com/v2/all?access_key=${API_KEY}`);
  promise
    .then((data)=>{console.log(data.json().then((data)=>{console.log(data);}));})
    .catch((error)=>{console.log(error);})

}
getData()