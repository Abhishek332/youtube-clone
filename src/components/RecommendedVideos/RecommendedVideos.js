import './RecommendedVideos.css';
import VideoCard from './VideoCard/VideoCard';

const RecommendedVideos = ()=>{
    return(
        <div className="recommendedVideos">
            <h2>Recommended Videos</h2>
            <div className="recommendedVideos__videos">
            <VideoCard
                title= "Youtube Clone"
                views = "2.3M Views"
                timestamp="2 hour ago"
                channelImage = "https://yt3.ggpht.com/ytc/AKedOLQAeNl9PFgUko6B9zT-EmnNj8lFOvHl-TWY9x0YQw=s68-c-k-c0x00ffffff-no-rj"
                channel = "Abhishek Porwal"
                image = "https://i.ytimg.com/an_webp/Y1uw9qZ-P9M/mqdefault_6s.webp?du=3000&sqp=CNeAj4sG&rs=AOn4CLDgk2RLs-YYzMlBbo8kwuydOIERmw"
            />
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            <VideoCard/>
            </div>
        </div>
    )
}

export default RecommendedVideos;