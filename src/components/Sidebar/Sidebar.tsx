import React from 'react'
import SideItem from './SideItem';
import { HomeIcon } from '../../icons';

const Sidebar = () => {
  return (
    <div className="w-full h-full">
      <SideItem Icon={HomeIcon} heading="home" />
    </div>
  )
}

export default Sidebar