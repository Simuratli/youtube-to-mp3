import { useState, useEffect } from "react";
import { ChangeEvent } from "react";
import axios from "axios";
import { getYoutubeId } from "../utils/getYoutubeId";

export function useDownload() {
  const [URL, setURL] = useState("");
  const [downloadURL, setDownloadURL] = useState("");
  const [valid, setValid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setURL(e.target.value);
  };

  useEffect(() => {
    const desktopPattern = /^https?:\/\/(www\.)?youtube\.com\/watch\?v=[\w-]+$/;
    const mobilePattern =
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const isValidURL = desktopPattern.test(URL) || !!URL.match(mobilePattern);
    setValid(isValidURL);
  }, [URL]);

  const handleOnClick = async () => {
    try {
      const id = getYoutubeId(URL);
      const options = {
        method: "GET",
        url: "https://youtube-mp36.p.rapidapi.com/dl",
        params: { id: id },
        headers: {
          "X-RapidAPI-Key":
            "2327fc59bbmshed31075027af188p1bed71jsn379d790bcd21",
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
        setTitle(response.data.title);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    } catch (error) {
      console.log(error);
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
    title,
  };
}
