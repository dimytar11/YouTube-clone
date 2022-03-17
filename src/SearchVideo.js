import React from "react";
import "./SearchVideo.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchVideo() {
  return (
    <div className="searchVideo">
      <div className="searchVideo__filter">
        <TuneIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://upload.wikimedia.org/wikipedia/commons/3/3e/Animal_Planet.png"
        channel="Animal Planet"
        verified
        subs="4.5M"
        noOfVideos={345}
        description="Animal Planet is an American multinational pay
        television channel owned by Discovery, Inc. First established on 
        June 1, 1996, the network is primarily devoted to series and 
        documentaries about wild animals and domestic pets."
      />

      <hr />

      <VideoRow
        subs="5M"
        title="We love animals"
        description=" On the last episode of The Zoo we met Bala, the newest snow leopard cub born at the 
Bronx Zoo. She’s one of 70+ snow leopards born here as part of our conservation 
efforts in the AZA Species Survival Plan."
        views="2.1M Views"
        timestamp="5 days ago"
        channel="Animal Planet"
        image="https://i.imgur.com/6NBWRJJ.jpg"
      />
    </div>
  );
}

export default SearchVideo;
