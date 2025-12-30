import React, {
  useEffect,
  useState,
} from 'react';

import { CiSearch } from 'react-icons/ci';

interface Props {
    onQuery: (value: string) => void,
    placeholder?: string,
    className?: string,
}


export const InputSearch = ({ onQuery, placeholder = '...', className = '' }: Props) => {

    const [query, setQuery] = useState('')

    const handleChangeQuery = () => {
        if(query.length > 1) {
            onQuery(query)
        }
        setQuery('')
    }

    const handleClickDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
         if(e.key === 'Enter') {
            handleChangeQuery()
         }
    }

    useEffect(() => {
        //debounce implementacion
        if(query.length > 1) {
            const timeOutId = setTimeout(() => {
                const newQuery: string = query.toLowerCase().trim();
                onQuery(newQuery);
            }, 700) //cada vez que el usuario cambia el valor del input, se esperan 700ms para ejecutar la busqueda.
            return () => {
                clearTimeout(timeOutId)
            }
        }
    }, [query, onQuery])

    return (
        <div className={`flex gap-2 justify-center ${className}`}>
            <label className="input">
                <CiSearch size={24} />
                <input
                value={query} 
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleClickDown}
                type="search"
                className="grow"
                placeholder={placeholder} />
            </label>
            <button onClick={handleChangeQuery} className='btn btn-primary'>buscar</button>
        </div>
    )
}
