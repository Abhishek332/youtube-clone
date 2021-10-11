import TuneIcon from '@mui/icons-material/Tune';
import './SearchPage.css';
import VideoRow from './VideoRow/VideoRow';
import ChannelRow from './ChannelRow/ChannelRow';

const SearchPage = ()=>{
    return(
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon/>
                <h2>Filter</h2>
            </div>
            <hr/>
            <ChannelRow
                image="https://i.ytimg.com/an_webp/D3d8E3c-iiM/mqdefault_6s.webp?du=3000&sqp=CNmLkYsG&rs=AOn4CLB1WyoOvNOoRKKRlao5OWkAUiC0Hg"
                channel="Mouni Roy"
                verified
                subs="660K"
                noOfVideos="34,438,837"
                description="KGF: Gali Gali Song | Dance Video | Neha Kakkar | Mouni Roy | Muskan Kalra Choreography by Muskan Kalra"
            />

            <hr/>
            <VideoRow
                views={1000}
                subs={"33K"}
                description={"Learn to make react clone"}
                timestamp={"1 hour ago"}
                channel={"Abhishek Porwal"}
                title={"Learn How to make Youtube Clone in React"}
                image={"https://i.ytimg.com/an_webp/WRS705LZbzw/mqdefault_6s.webp?du=3000&sqp=CLjykIsG&rs=AOn4CLBNTN46LcSmWYo7LASJewd2CiXPvg"}
            />
            <VideoRow
                views={21,621,532 }
                subs={"6M"}
                description={"RAMTA JOGI | AR Rahman | Iman Esmail Choreography | Bollywood Dance by Iman Esmail"}
                timestamp={"1 year ago"}
                channel={"Iman Esmail Choreography"}
                title={"RAMTA JOGI | AR Rahman | Iman Esmail Choreography"}
                image={"https://i.ytimg.com/an_webp/9Bt2F6pbiag/mqdefault_6s.webp?du=3000&sqp=CPj-kIsG&rs=AOn4CLDa7a56bEkvLx9s1IPXRitJftN3SQ"}
            />
            <VideoRow
                views={55,670}
                subs={"5M"}
                description={"Why YouTube Terminated Channel? | YouTube Channel Suspended Kyu Hota Hai | Sunday Comment Box#182"}
                timestamp={"1 day ago"}
                channel={"Technical Yogi"}
                title={"Why YouTube Terminated Channel?"}
                image={"https://i.ytimg.com/an_webp/TkcBHlWElW4/mqdefault_6s.webp?du=3000&sqp=CJbakIsG&rs=AOn4CLBadZl2TtJ66b9OI5EX4oZ5zBQWcg"}
            />
            <VideoRow
                views={1000}
                subs={"33K"}
                description={"Learn to make react clone"}
                timestamp={"1 hour ago"}
                channel={"Abhishek Porwal"}
                title={"Learn How to make Youtube Clone in React"}
                image={"https://i.ytimg.com/an_webp/lAOkx2yZESY/mqdefault_6s.webp?du=3000&sqp=CPqMkIsG&rs=AOn4CLDlI5Pf--bjUCL5OGo6vCOYuyqKKQ"}
            />
        </div>
    )
}

export default SearchPage;