import React, { useState, useEffect } from "react";
import "../../.././../pages/client/Home/sections/Shorten.css";
import axios from "axios";

const Shorten = () => {
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shortenedUrl, setShortenedUrl] = useState("");

  const getData = async () => {
    try {
      const res = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenedUrl(res?.data?.result?.short_link);
      console.log(res?.data);
    } catch (err) {
      setErrorMessage("");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleShortenClick = () => {
    if (inputValue.trim() === "") {
      setErrorMessage("Please add a link");
    } else {
      setErrorMessage("");
      getData();
    }
  };

  return (
    <div className="shorten">
      <div className="shorten-wrapper">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>
            <input
              type="text"
              placeholder="Shorten a link here..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              style={errorMessage ? { border: "2px solid #F46363" } : {}}
            />
          </div>
          <div>
            {errorMessage && (
              <div className="error-message">{errorMessage}</div>
            )}
          </div>
        </div>
        <button className="btn" onClick={handleShortenClick}>Shorten It!</button>
        {shortenedUrl && (
          <div>
            <p>Shortened URL: {shortenedUrl}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shorten;
