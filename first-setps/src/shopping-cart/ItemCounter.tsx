interface Product {
    id: number;
    name: string;
    quantity: number;
}

interface Props {
    product: Product;
    //TODO: FUNCIONES.
}



export const ItemCounter = ({ product }: Props) => {
    return (
        <>
            <li>{product.name}, {product.quantity}</li>
        </>
    )
}
