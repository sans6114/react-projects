import { useState } from 'react';

import { ItemCounter } from './shopping-cart/ItemCounter';

interface Product {
    id: number;
    name: string;
    quantity: number;
}

const items: Product[] = [
    {
        id: 1,
        name: 'Producto 1',
        quantity: 2
    },
    {
        id: 2,
        name: 'Producto 2',
        quantity: 5
    },
    {
        id: 3,
        name: 'Producto 3',
        quantity: 1
    }
]

export function FirstStepsApp() {

    const [products, setProducts] = useState(items);
    const [idSelected, setIdSelected] = useState<number>(items[0].id)

    //incrementar la cantidad.
    function increment() {
        const newState = products.map(p => {
            return p.id === idSelected 
            ? {...p, quantity: p.quantity + 1}
            : p
        })
        setProducts(newState);
    }
    //decrementar la cantidad.
    function decrement() {
        const newState = products.map(p => {
            if (p.id === idSelected && p.quantity > 1) {
                return {...p, quantity: p.quantity - 1}
            }
            return p
        })
        setProducts(newState);
    }
    //cambiar el producto seleccionado.
    function changeSelected ({target}) {
        setIdSelected(Number(target.value))
    }

    //setear al estado inicial.

    return (
        <>
            <h1>Contador de ejemplo</h1>
            <select name="" onChange={changeSelected} id="">
                {
                    products.map((item) => (
                        <option key={item.id} value={item.id}>{item.name}</option>
                    ))
                }
            </select>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <ul>
                {
                    products.map((itemProduct) => (
                        <ItemCounter key={itemProduct.id} product={itemProduct} />
                    ))
                }
            </ul>
        </>
    )
}