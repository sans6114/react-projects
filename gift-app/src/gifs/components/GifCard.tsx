import React from 'react';

import type { Gif } from '../mockData/gifts.mock';

interface Props {
    gif: Gif
}



export const GiftCard = ({gif}: Props) => {
    return (
        <div className='flex flex-col items-center justify-center shadow-md rounded-2xl'>
            <div className='h-100 w-full overflow-hidden'>
                <img
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                    src={gif.url}
                    alt={`gift video of ${gif.title}`}
                />
            </div>
            <div className='p-3 flex flex-col gap-3 self-start'>
                <h3 className='font-semibold truncate'>{gif.title}</h3>
                <p className='text-md mt-1'>
                    {gif.width} x {gif.height}
                </p>
            </div>
        </div>
    )
}
