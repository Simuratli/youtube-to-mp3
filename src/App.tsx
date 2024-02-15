import './App.css'
import axios from 'axios'
function App() {


  const handleClick = async () =>{

    const options = {
      method: 'GET',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      params: {id: 'UxxajLWwzqY'},
      headers: {
        'X-RapidAPI-Key': '2327fc59bbmshed31075027af188p1bed71jsn379d790bcd21',
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
