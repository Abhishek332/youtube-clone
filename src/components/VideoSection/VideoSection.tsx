import VideoCard from './VideoCard';
import sampleData from '../../sampleData.json';

const VideoSection = () => {
    return (
        <div className="h-full w-full flex flex-col items-center lg:grid grid-cols-1 lg:grid-cols-4 lg:mx-7 mt-3">
            {
                sampleData.data.map((cardData, index) => <VideoCard {...cardData} key={cardData.title + index} />)
            }
        </div>
    )
}

export default VideoSection