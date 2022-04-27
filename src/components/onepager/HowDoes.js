import React, { Component } from 'react';

function HowDoes() {
  return (
    <>
      <p className="exo2" style={{ fontWeight: "bold", fontSize: "40px"}}>So how does it work?</p>
      <div>
        <table className="howitworks">
          <tbody>
            <tr>
              <td className="howitworks__td">
                <span>📽️</span>
                <span>Choose Video</span>
              </td>
              <td className="howitworks__td" style={{ textAlign: "center"}}>
                <p style={{ fontSize: "40px" }}>+</p>
              </td>
              <td className="howitworks__td">
                <span>🎶</span>
                <span>Choose Music</span>
              </td>
              <td className="howitworks__td" style={{ textAlign: "center"}}>
                <p style={{ fontSize: "40px" }}>=</p>
              </td>
              <td className="howitworks__td">
                <span>🗜️</span>
                <span className="mash" style={{ fontSize: '17px' }}>MASH</span><span>NFT</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default HowDoes;
