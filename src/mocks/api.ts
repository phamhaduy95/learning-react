const base = '/mock-api';

export const api = {
    products: {
        base: `${base}//products`,
        item: `${base}//products/:productId`,
        pagination: `${base}/products/pagination`,
    },
} as const;
