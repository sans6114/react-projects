import { GifList } from './gif/components/GifList';
import { PreviousSearch } from './gif/components/PreviousSearch';
import { useGif } from './gif/hooks/useGif';
import { CustomHeader } from './shared/components/CustomHeader';
import { InputSearch } from './shared/components/InputSearch';

//componente en el que vive mi aplicacion, buena practica para separarlo de main.tsx.
export const GiftsApp = () => {
    const { gifList, previousSearches, handleTermClick, handleChangeSearch } =
        useGif();

    //info de header
    const title: string = 'Buscador de gifts';
    const description: string =
        'Busca y descubre un gift para descargar y compartir.';

    return (
        <div className="min-h-screen flex flex-col gap-10">
            {/* title  */}
            <CustomHeader title={title} description={description} />

            {/* search */}
            <InputSearch
                onQuery={handleChangeSearch}
                placeholder="Superman gift"
            />

            {/* previous reasearch */}
            <PreviousSearch
                searchesPrevious={previousSearches}
                onLabelClick={handleTermClick}
            />

            {/* gifts container  */}
            {GifList && <GifList gifs={gifList} />}
        </div>
    );
};
