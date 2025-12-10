import type { Gif } from '../interfaces/gif';

interface Props {
    gif: Gif;
}

export const GiftCard = ({ gif }: Props) => {
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure className="w-full max-h-[200px]">
                <img src={gif.url} alt={`gift video of ${gif.title}`} />
            </figure>
            <div className="card-body ">
                <h2 className="card-title">{gif.title}</h2>
                <span className="badge badge-primary">
                    {gif.width} x {gif.height}
                </span>
            </div>
        </div>
    );
};
