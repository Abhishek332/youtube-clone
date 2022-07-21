import VideoCard from './VideoCard';
import sampleData from '../../sampleData.json';

const VideoSection = () => {
    return (
        <div className="h-full w-full flex flex-wrap justify-between mx-7 mt-3">
            {
                sampleData.data.map((cardData, index)=><VideoCard {...cardData} key={cardData.title + index}/>)
            }
        </div>
    )
}

export default VideoSection