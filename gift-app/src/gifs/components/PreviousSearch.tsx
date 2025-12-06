import React from 'react';

interface Props {
    searchesPrevious?: string[],
    onLabelClick: (term: string) => void,
}

export const PreviousSearch = ({searchesPrevious = ['Goku', 'Saitama', 'Naruto'], onLabelClick}: Props ) => {
    return (
        <div className='flex flex-col gap-y-4 items-center'>
            <h2 className='text-2xl font-bold'>Busquedas previas</h2>
            <ul className='flex gap-2 items-center'>
                {
                    searchesPrevious.map((prev) => (
                        <li 
                        onClick={() => onLabelClick(prev)}
                        className='p-2 rounded border' 
                        key={prev}
                        >{prev}</li>
                    ))
                }
            </ul>
        </div>
    )
}
