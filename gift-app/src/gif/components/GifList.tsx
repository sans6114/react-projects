import type { Gif } from '../interfaces/gif';
import { GiftCard } from './GifCard';

interface Props {
    gifs: Gif[];
}

export const GifList = ({ gifs }: Props) => {
    return (
        <div className="grid grid-auto-fill gap-4 w-3/4 mx-auto">
            {gifs.map(gifItem => (
                <GiftCard key={gifItem.id} gif={gifItem} />
            ))}
        </div>
    );
};
