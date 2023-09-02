import React from 'react';
import { Card } from '../Components';
import './ProductCardCollection.scss';

type ProductType = {
    id: string;
    name: string;
    description: string;
};

const products: ProductType[] = [
    {
        id: crypto.randomUUID(),
        description: 'Apple is great fruit for your health.',
        name: 'Apple',
    },
    {
        id: crypto.randomUUID(),
        description: 'This is second item.',
        name: 'Orange',
    },
    {
        id: crypto.randomUUID(),
        description: 'Grape is deep purple.',
        name: 'Grape',
    },
];

function renderProductCards(products: ProductType[]) {
    return products.map((product, index) => <Card header={product.name} body={product.description} key={product.id} />);
}

type Props = {
    count: number;
};

export default function ProductCardCollection(props: Props) {
    console.log(crypto.randomUUID());
    return <div className='Container'>{renderProductCards(products)}</div>;
}
