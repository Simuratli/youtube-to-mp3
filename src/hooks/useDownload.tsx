import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import axios from "axios";

export function useDownload() {
  const [URL, setURL] = useState("");
  const [downloadURL, setDownloadURL] = useState("");
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value);
  };

  useEffect(() => {
    const urlPattern = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+$/;
    setValid(urlPattern.test(URL));
  }, [URL]);

  const handleOnClick = async () => {
    const options = {
      method: "GET",
      url: "https://youtube-mp36.p.rapidapi.com/dl",
      params: { id: URL.split("?v=")[1] },
      headers: {
        "X-RapidAPI-Key": "2327fc59bbmshed31075027af188p1bed71jsn379d790bcd21",
        "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
      },
    };

    try {
      setLoading(true);
      let response = await axios.request(options);
      if (response.data.status === "processing") {
        await new Promise(function (resolve) {
          setTimeout(async function () {
            resolve("");
            response = await axios.request(options);
          }, 2500);
        });
      }
      setDownloadURL(response.data.link);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePaste = () => {
    navigator.clipboard
      .readText()
      .then((text: string) => {
        setURL(text.trim());
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };

  return {
    handleOnChange,
    handleOnClick,
    downloadURL,
    loading,
    valid,
    URL,
    setURL,
    handlePaste,
  };
}
