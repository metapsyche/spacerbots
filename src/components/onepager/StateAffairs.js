import React, { Component } from 'react';

function StateAffairs() {
  return (
    <>
      <p className="exo2" style={{ fontWeight: "bold", fontSize: "25px" }}>The State of Affairs</p>
      <table>
        <tr>
          <td width="45%" height="250px">
            <img width="60%" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0ca69969-8c13-4089-a805-724384619cae%2FGroup_28.png?table=block&id=dffb41bb-d711-4d07-af16-6b1b8c9bf400&spaceId=67e35cad-90f1-405b-9eb4-c5684c6f68a4&width=580&userId=fda6cf0a-2ecf-4418-8b9f-220c673ffeb6&cache=v2"/>
          </td>
          <td width="45%" height="250px">
            <img width="60%" src="https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faf53e053-8b41-4d00-9845-38d46d578eec%2FGroup_26.png?table=block&id=7119dd31-b15e-4a9e-90e1-c4312b4d9bbb&spaceId=67e35cad-90f1-405b-9eb4-c5684c6f68a4&width=480&userId=fda6cf0a-2ecf-4418-8b9f-220c673ffeb6&cache=v2"/>
          </td>
        </tr>
      </table>

      <table width="100%">
        <thead style={{ fontWeight: 'bold' }}>
          <tr>
            <td width="45%" valign="top">
              <p>What's wrong?</p>
            </td>
            <td width="45%" valign="top">
              <p>What's right?</p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr valign="top">
            <td width="49%" valign="top">
              <ul width="100%" valign="top" style={{ margin: '0', padding: '15px' }}>
                <li>
                  <p>- Music videos can be extremely expensive and time consuming</p>
                </li>
                <li>
                  <p>- Collaboration opportunities are very limited for most video and music makers</p>
                </li>
                <li>
                  <p>- Other NFT platforms only offer minting content once </p>
                </li>
                <li>
                  <p>- Fans were only given one option for what to envision with songs, which came from outside sources</p>
                </li>
              </ul>
            </td>
            <td width="49%" valign="top">
              <ul width="100%" valign="top" style={{ margin: '0', padding: '15px' }}>
                <li>
                  <p>+ MASH empowers musicians and artists with new opportunities to expand their fanbase and create multiple streams of passive income</p>
                </li>
                <li>
                  <p>+ Successful creators can now collaborate with up-and-comers and unknown talent </p>
                </li>
                <li>
                  <p>+ Creators can mint their work as a collaboration as many times as they’d like</p>
                </li>
                <li>
                  <p>+ Fans can decide which music and video feels right together in a way that most represents them </p>
                </li>
                </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default StateAffairs;
