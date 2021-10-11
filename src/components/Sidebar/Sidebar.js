import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function Sidebar() {
    return (
        <div className = "sidebar">
            <SidebarRow selected title="Home" Icon={HomeIcon} />
            <SidebarRow title="Explore" Icon={ExploreOutlinedIcon}/>
            <SidebarRow title="Suscriptions" Icon={SubscriptionsOutlinedIcon}/>
            <hr/>
            <SidebarRow title="Library" Icon={VideoLibraryOutlinedIcon} />
            <SidebarRow title="History" Icon={HistoryOutlinedIcon}/>
            <SidebarRow title="Your videos" Icon={OndemandVideoOutlinedIcon}/>
            <SidebarRow title="Watch later" Icon={WatchLaterOutlinedIcon} />
            <SidebarRow title="Show more" Icon={ExpandMoreOutlinedIcon}/>
        </div>
    )
}

export default Sidebar
