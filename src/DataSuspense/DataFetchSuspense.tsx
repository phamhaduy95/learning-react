import { r } from 'msw/lib/glossary-de6278a9';
import React, { useEffect, useState } from 'react';
import { api } from '../mocks/api';
import { ProductSchema } from '../mocks/types';

export default function DataFetchSuspense() {
    const [data, setData] = useState<ProductSchema[]>([]);
    useEffect(() => {
        var url = new URL(api.products.pagination, window.location.href);
        url.searchParams.append('pageSize', '5');
        url.searchParams.append('pageIndex', '0');
        fetch(url.toString()).then(async (res: Response) => {
            const data = (await res.json()) as ProductSchema[];
            setData(data);
        });
    }, []);
    return <div></div>;
}
