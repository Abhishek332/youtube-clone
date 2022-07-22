import React from 'react';
import { SideItemTypes } from '../../types';

const SideItem: React.FC<SideItemProps> = ({ Icon, heading, link, selected }) => {
  return (
    <div className={`flex py-3 items-center hover:font-medium ${selected ? 'bg-gray-200 font-medium' : ' hover:bg-gray-100'} cursor-pointer`} onClick={() => { }}>
      <Icon className="mx-5 text-base" id={heading} />
      <p className="font-roboto first-letter:capitalize text-sm">{heading}</p>
    </div>
  )
}

export default SideItem

interface SideItemProps extends SideItemTypes {
  selected?: boolean;
}