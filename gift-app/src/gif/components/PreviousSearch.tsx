interface Props {
    searchesPrevious?: string[];
    onLabelClick: (term: string) => void;
}

export const PreviousSearch = ({
    searchesPrevious = [],
    onLabelClick,
}: Props) => {
    return (
        <div className="flex flex-col gap-y-4 items-center">
            <h2 className="text-2xl font-bold">Busquedas previas</h2>
            <ul className="flex gap-2 items-center">
                {searchesPrevious.length > 0 ? (
                    searchesPrevious.map(prev => (
                        <li
                            onClick={() => onLabelClick(prev)}
                            className="p-2 rounded border bg-primary cursor-pointer text-white hover:shadow-lg hover:scale-105 transition-all"
                            key={prev}
                        >
                            {prev}
                        </li>
                    ))
                ) : (
                    <span>No hay busquedas previas</span>
                )}
            </ul>
        </div>
    );
};
