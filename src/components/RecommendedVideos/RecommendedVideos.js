import "./RecommendedVideos.css";
import VideoCard from "./VideoCard/VideoCard";
import Data from "./data.json";

const RecommendedVideos = () => {
  return (
    <div className="recommendedVideos">
      <h2>Recommended Videos</h2>
      <div className="recommendedVideos__videos">
        {Data.data.map((e, index) => {
         return  <VideoCard
            key={index}
            title={e.title}
            views={e.views}
            timestamp={e.timestamp}
            channelImage={e.channelImage}
            channel={e.channel}
            image={e.image}
          />;
        })}
                    
                    {/*
                    
                    
                    title="Manike Mage Hite | Best song today"
                    views="2.3M Views"
                    timestamp="2 hour ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLT1nMuQamMyk1tk5z_UMKrfQVV8do9SGpeXOA=s68-c-k-c0x00ffffff-no-rj"
                    channel="Audio Creator"
                    image="https://i.ytimg.com/vi/3RZ7uTh_0yA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCG-Y_XGAJEnsyVmsJzGI1_UVTNsA"
                />
                <VideoCard
                    title="How to convert image into pencil art"
                    views="1.3M Views"
                    timestamp="1 hour ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQuhuxgbW7zW6du-WGiYASPZuyFhozXLaV7OyME=s68-c-k-c0x00ffffff-no-rj"
                    channel="Editing CLub"
                    image="https://i.ytimg.com/an_webp/MticYzYkofw/mqdefault_6s.webp?du=3000&sqp=CJzfkIsG&rs=AOn4CLDUCisc6q_XFczxcUh6Xd776Wdqlw"
                />
                <VideoCard
                    title="Ladai ladai maf kro | RJ Naved | Best Comedy"
                    views="1.3M Views"
                    timestamp="5 days ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQRXetxubs-EBQsjCVOTPYh_zzy0KTojgj5YmGqZg=s68-c-k-c0x00ffffff-no-rj"
                    channel="Mirchi Murga"
                    image="https://i.ytimg.com/an_webp/FfV-k8ZOH6I/mqdefault_6s.webp?du=3000&sqp=CJrYkIsG&rs=AOn4CLCIOflYBjDh2_tcXGUbbCOVnP78qw"
                />
                <VideoCard
                    title="How to take revenge HG Among ... | Prabhuvani | sadvachan"
                    views="44K Views"
                    timestamp="1 week ago"
                    channelImage="https://yt3.ggpht.com/ytc/AKedOLQAeNl9PFgUko6B9zT-EmnNj8lFOvHl-TWY9x0YQw=s68-c-k-c0x00ffffff-no-rj"
                    channel="AMy Asharya"
                    image="https://i.ytimg.com/an_webp/tqzaQ-mfMuo/mqdefault_6s_480x270.webp?du=3000&sqp=COb6kIsG&rs=AOn4CLCxov9xSllNZ2tf3Pu7leXu1CkPIw"
                /> */}
      </div>
    </div>
  );
};

export default RecommendedVideos;
