import React, { useState } from 'react'
import SideItem from './SideItem';
import { HomeIcon, ExploreOutlinedIcon, SubscriptionsOutlinedIcon, VideoLibraryOutlinedIcon, HistoryOutlinedIcon, OndemandVideoOutlinedIcon, WatchLaterOutlinedIcon, ExpandMoreOutlinedIcon } from '../../icons';
import { SideItemTypes } from '../../types';

const Sidebar = () => {
  const [selected, setSelected] = useState<string>('home');

  const Items: SideItemTypes[] = [
    {
      Icon: HomeIcon,
      heading: 'home'
    },
    {
      Icon: ExploreOutlinedIcon,
      heading: 'explore'
    },
    {
      Icon: SubscriptionsOutlinedIcon,
      heading: 'subscriptions'
    },
    {
      Icon: VideoLibraryOutlinedIcon,
      heading: 'library'
    },
    {
      Icon: HistoryOutlinedIcon,
      heading: 'history'
    },
    {
      Icon: OndemandVideoOutlinedIcon,
      heading: 'your videos'
    },
    {
      Icon: WatchLaterOutlinedIcon,
      heading: 'watch later'
    },
    {
      Icon: ExpandMoreOutlinedIcon,
      heading: 'show more'
    }
  ],
    handleClick = (e: any) => {
      const { innerText } = e.target as HTMLElement;
      setSelected(innerText.toLowerCase());
    }

  return (
    <div className="w-full h-full" onClick={handleClick}>
      {Items.map((item, index) => <SideItem {...item} selected={selected === item.heading} key={item.heading + index} />)}
    </div>
  )
}

export default Sidebar