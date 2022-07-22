import React from 'react'
import type { VideoCardTypes } from '../../types'

const VideoCard: React.FC<VideoCardTypes> = ({ thumbnail, title, channelIcon, channelName, views, timestamp }) => {
    return (
        <div className="mb-9 w-[90%] lg:w-[16.5rem] cursor-pointer lg:hover:scale-[1.2] duration-300 hover:shadow-lg bg-white">
            <div className="aspect-video w-full bg-yellow-500 ">
                <img src={thumbnail} alt='' className="h-full w-full" />
            </div>
            <div className="flex p-3">
                <div className="h-8 w-8 rounded-full relative object-cover overflow-hidden">
                    <img src={channelIcon} alt="" className="absolute" />
                </div>
                <div className="mx-2">
                    <p className="text-sm font-roboto font-medium mb-[0.125rem] w-[90%]">{title.length > 50 ? `${title.substring(0, 50)} ...` : title}</p>
                    <p className="text-xs my-[0.125rem] text-gray-700 font-semibold">{channelName}</p>
                    <p className="text-xs text-gray-600"><span>{`${views} views`}</span> | <span>{timestamp}</span></p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard