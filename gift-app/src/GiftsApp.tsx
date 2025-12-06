import React, { useState } from 'react';

import { GifList } from './gifs/components/GifList';
import { PreviousSearch } from './gifs/components/PreviousSearch';
import { mockGifs } from './gifs/mockData/gifts.mock';
import { CustomHeader } from './shared/components/CustomHeader';
import { InputSearch } from './shared/components/InputSearch';

const initialPrevious = [
    'goku',
    'saitama',
    'otro'
]


//componente en el que vive mi aplicacion, buena practica para separarlo de main.tsx
export const GiftsApp = () => {
    //state
    const [searchValue, setSearchValue] = useState('')
    const [previousSearches, setPreviousSearches] = useState(initialPrevious)

    //info
    const title: string = 'Buscador de gifts'
    const description: string = 'Busca y descubre un gift para descargar y compartir.'

    //functions
    const onLabelClick = (term: string) => {
        console.log(term)
    }
    
    const handleChangeSearch = (query: string) => {
        if(previousSearches.includes(query)) return;
        setPreviousSearches(prev => [query, ...prev])
        setSearchValue(query)
    }


    return (
        <div className='min-h-screen flex flex-col gap-10'>
            {/* title  */}
            <CustomHeader title={title} description={description}/>

            {/* search */}
            <InputSearch
            value={searchValue}
            onQuery={handleChangeSearch}
            placeholder='Superman gift'/> 

            {/* previous reasearch */}
            <PreviousSearch searchesPrevious={previousSearches} onLabelClick={onLabelClick} />

            {/* gifts container  */}
            <GifList gifs={mockGifs}/>
        </div>
    )
}
