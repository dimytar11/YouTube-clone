import React from "react";
import "./RecommendedVideo.css";
import VideoCard from "./VideoCard";

function RecommendedVideo() {
  return (
    <div className="recommendedVideo">
      <h2>Recommended</h2>
      <div className="recommendedVideos__videos">
        <VideoCard
          title="React JS"
          views="1.1M Views"
          timestamp="2 days ago"
          channelImage="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png"
          channel="JS Club"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--3zWuwYa3--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/pdib9r9rk5j1m7oala1p.png"
        />
        <VideoCard
          title="Relaxing Bossa Nova"
          views="22.1M Views"
          timestamp="25 days ago"
          channelImage="https://yt3.ggpht.com/b_TMVgl-C656k8BinHkzEpkjRmXEObkGvj45mFboZjmCnxDPlgHDgn__RU8mfFo2N6IKsf1J=s68-c-k-c0x00ffffff-no-rj"
          channel=""
          image="https://i.ytimg.com/vi/BW7oF43nmM4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB5USqV6GJQ1-XdZ1OXFG2gxuN79A"
        />
        <VideoCard
          title="Become a web developer"
          views="2.1M Views"
          timestamp="5 days ago"
          channelImage="http://www.parzlogic.com/wp-content/uploads/2017/10/web-dev.jpg"
          channel="WebDev"
          image="https://hext.to/wp-content/uploads/2018/12/shutterstock_1181290198-Converted-1920.jpg"
        />
        <VideoCard
          title="Tom & Jerry Mix"
          views="3.2M Views"
          timestamp="13 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLSMgJlSbTmco5yV8yaJUCdYZoK8RWaswcgksmA-gA=s68-c-k-c0x00ffffff-no-rj"
          channel=""
          image="https://i.ytimg.com/an_webp/iUfHLNXtMXw/mqdefault_6s.webp?du=3000&sqp=CJT0y5EG&rs=AOn4CLDIaHDPQY1Ia32tJVaKxSkdN5rrlg"
        />
        <VideoCard
          title="Angular JS"
          views="3.1M Views"
          timestamp="1 year ago"
          channelImage="https://cdn.aglty.io/agility-cms-docs/logos/AngularJS-Shield.svg"
          channel="WDS"
          image="https://res.cloudinary.com/practicaldev/image/fetch/s--iJZBBAvk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6doxxhpppvzoxdbv0do6.png"
        />
        <VideoCard
          title="IBIZA SUMMER MIX 2022 🍓"
          views="22.1M Views"
          timestamp="2 days ago"
          channelImage="https://yt3.ggpht.com/mNTMdW8MEMMqjtsdtz22xFYyrA_OKuPBRaocYGk5UQq6vpoW7iCaz81cMmMXpf9VunZjRROl=s68-c-k-c0x00ffffff-no-rj"
          channel="Green Sound"
          image="https://i.ytimg.com/vi/iu7TUUZefvw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuMXvDCZlU7KTZcnFtrc_77v4PLA"
        />

        <VideoCard
          title="Looney Toons"
          views="900K Views"
          timestamp="5 Months ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLTPcHv2LI7qEHOob38Bp8HMiYI121bpkGgu7c0XhQ=s68-c-k-c0x00ffffff-no-rj"
          channel="LT"
          image="https://media.gq.com/photos/5b4d13b99eea1c27bfdb9e93/16:9/w_3556,h_2000,c_limit/Looney-Toons-GQ-July-2018-071618-3x2.jpg"
        />
      </div>
    </div>
  );
}

export default RecommendedVideo;
