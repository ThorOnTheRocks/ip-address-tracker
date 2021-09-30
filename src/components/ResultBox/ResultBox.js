import React from "react";

// Styles
import './ResultBox.styles.scss'

const ResultBox = () => {
  return (
    <div className="result__container">
      <div className="result result__ip">
        <h2 className="result__heading">IP Address</h2>
        <p className="result__paragraph">192.212.174.101</p>
      </div>
      <div className="result result__location">
        <h2 className="result__heading">Location</h2>
        <p className="result__paragraph">Brooklyn, NY 10001</p>
      </div>
      <div className="result result__timezone">
        <h2 className="result__heading">Timezone</h2>
        <p className="result__paragraph">UTC - 05:00</p>
      </div>
      <div className="result result__isp">
        <h2 className="result__heading">ISP</h2>
        <p className="result__paragraph">SpaceX Starlink</p>
      </div>
    </div>
  )
}

export default ResultBox;