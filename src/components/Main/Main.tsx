import { ChangeEvent,useState } from 'react';
import './Main.css';
import axios from 'axios'

function Main() {
    const [URL, setURL] = useState('')
    const [downloadURL, setDownloadURL] = useState('')
    const [valid, setValid] = useState(false)

    const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
        // setURL(e.target.value)
        const urlPattern = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+$/;
        setValid(urlPattern.test(e.target.value))
        if(urlPattern.test(e.target.value)){
            setURL(e.target.value.split('?v=')[1])
        }

        console.log(e.target.value.split('?v=')[1])
    }

    // https://www.youtube.com/watch?v=UwxatzcYf9Q
    const handleOnClick = async () => {
        const options = {
            method: 'GET',
            url: 'https://youtube-mp36.p.rapidapi.com/dl',
            params: {id: URL},
            headers: {
              'X-RapidAPI-Key': '2327fc59bbmshed31075027af188p1bed71jsn379d790bcd21',
              'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
            }
          };

          console.log(options,'options')
          
          try {
              const response = await axios.request(options);
              console.log(response.data,'loog');
              setDownloadURL(response.data.link)
          } catch (error) {
              console.error(error);
          }
    }



  return (
    <section className='main'>
        <div className="main__content">
            <div className="prepare">
                <input autoComplete='off' onChange={handleOnChange} type="text" placeholder='Enter URL' />
                <button disabled={!valid} onClick={handleOnClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                </button>
            </div>
            {
                downloadURL && <div className="download">
                <a download href={downloadURL}>Download</a>
            </div>
            }
        </div>
    </section>
  )
}

export default Main