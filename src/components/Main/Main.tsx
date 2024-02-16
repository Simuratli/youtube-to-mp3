import "./Main.css";
import Loader from "../Loader";
import { useDownload } from "../../hooks/useDownload";

function Main() {
  const {
    loading,
    handleOnChange,
    handleOnClick,
    valid,
    downloadURL,
    URL,
    handlePaste,
  } = useDownload();

  return (
    <section className="main">
      <div className="main__content">
        {loading && <Loader />}
        <div className="prepare">
          <input
            autoComplete="off"
            onChange={handleOnChange}
            value={URL}
            type="text"
            placeholder="Enter URL"
          />
          <button name="pasteButton" onClick={handlePaste}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
              height="800px"
              width="800px"
              version="1.1"
              id="Layer_1"
              viewBox="0 0 502 502"
            >
              <g>
                <g>
                  <g>
                    <path d="M467.35,190.176l-70.468-70.468c-1.876-1.875-4.419-2.929-7.071-2.929h-23.089V49c0-5.523-4.478-10-10-10h-115v-2.41     c0-20.176-16.414-36.59-36.59-36.59h-11.819c-20.176,0-36.591,16.415-36.591,36.59V39h-115c-5.522,0-10,4.477-10,10v386     c0,5.523,4.478,10,10,10h146.386v47c0,5.523,4.478,10,10,10h262.171c5.522,0,10-4.477,10-10V197.247     C470.279,194.595,469.225,192.051,467.35,190.176z M399.811,150.921l36.326,36.326h-36.326V150.921z M144.721,59h47     c5.522,0,10-4.477,10-10s-4.478-10-10-10h-15v-2.41c0-9.148,7.442-16.59,16.591-16.59h11.819c9.147,0,16.59,7.442,16.59,16.59V49     c0,5.523,4.478,10,10,10h22v20h-109V59z M198.107,116.779c-5.522,0-10,4.477-10,10V425H51.721V59h73v30c0,5.523,4.478,10,10,10     h129c5.522,0,10-4.477,10-10V59h73v57.779H198.107z M450.278,482H208.107V136.779H379.81v60.468c0,5.523,4.478,10,10,10h60.468     V482z" />
                    <path d="M243.949,253.468h125.402c5.522,0,10-4.477,10-10c0-5.523-4.478-10-10-10H243.949c-5.522,0-10,4.477-10,10     C233.949,248.991,238.427,253.468,243.949,253.468z" />
                    <path d="M414.437,283.478H243.949c-5.522,0-10,4.477-10,10s4.478,10,10,10h170.487c5.522,0,10-4.477,10-10     S419.959,283.478,414.437,283.478z" />
                    <path d="M414.437,333.487H243.949c-5.522,0-10,4.477-10,10s4.478,10,10,10h170.487c5.522,0,10-4.477,10-10     S419.959,333.487,414.437,333.487z" />
                    <path d="M414.437,383.497H243.949c-5.522,0-10,4.477-10,10s4.478,10,10,10h170.487c5.522,0,10-4.477,10-10     S419.959,383.497,414.437,383.497z" />
                    <path d="M397.767,253.468h16.67c5.522,0,10-4.477,10-10c0-5.523-4.478-10-10-10h-16.67c-5.522,0-10,4.477-10,10     C387.767,248.991,392.245,253.468,397.767,253.468z" />
                  </g>
                </g>
              </g>
            </svg>
          </button>

          <button disabled={!valid} name="sendButton" onClick={handleOnClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
          </button>
        </div>
        {downloadURL && (
          <div className="download">
            <a download href={downloadURL}>
              Download
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default Main;
