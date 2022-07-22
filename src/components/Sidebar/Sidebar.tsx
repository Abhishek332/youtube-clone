import React, { Dispatch, SetStateAction, useState } from 'react'
import SideItem from './SideItem';
import { HomeIcon, ExploreOutlinedIcon, SubscriptionsOutlinedIcon, VideoLibraryOutlinedIcon, HistoryOutlinedIcon, OndemandVideoOutlinedIcon, WatchLaterOutlinedIcon, ExpandMoreOutlinedIcon } from '../../icons';
import type { SideItemTypes } from '../../types';

const Sidebar: React.FC<SidebarProps> = ({ setActive }) => {
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
      const target = e.target as HTMLElement;
      if (target.innerText) {
        setSelected(target.innerText.toLowerCase());
        setActive(false);
        return;
      }
      setSelected(target.id.toLowerCase());
      setActive(false);
    }

  return (
    <div className="w-full h-full bg-white" onClick={handleClick}>
      {Items.map((item, index) => <SideItem {...item} selected={selected === item.heading} key={item.heading + index} />)}
    </div>
  )
}

export default Sidebar

interface SidebarProps {
  setActive: Dispatch<SetStateAction<boolean>>;
}