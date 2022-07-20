import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material/SvgIcon/SvgIcon';
import React from 'react'

const SideItem: React.FC<SideItemProps> = ({ Icon, heading, link }) => {
  return (
    <div className="flex">
      <Icon />
      <p>{heading}</p>
    </div>
  )
}

export default SideItem

interface SideItemProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  heading: string;
  link?: string;
}