import './ChannelRow.css'
import Avatar from '@mui/material/Avatar';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelRow = ({image, channel, subs, noOfVideos, description, verified})=>{
    return (
        <div className="channelRow">
            <Avatar className="channelRow__logo" alt={channel} src={image}/>
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleIcon className="verified"/>}</h4>
                <p>{subs} susbcribers . {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow;