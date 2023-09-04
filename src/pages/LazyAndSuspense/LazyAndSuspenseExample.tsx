import ErrorBoundary from '@components/ErrorBoundary';
import { lazy, Suspense } from 'react';

// how to refresh loading for several time if there is a connection issue.`
const Lazy = lazy(async () => {
    const module = await import('./ProductCardCollection');
    // throw Error("error");
    return module;
});

// This example demonstrates how to perform code slitting for React component, which enable us to load one React Component on demand instead of loading a whole bundle.

// The first time, the lazy component is rendered, the browser fetches the associated file containing the component.
export function LazyAndSuspenseExample() {
    return (
        <>
            {/* you should wrap Suspense and Lazy into an ErrorBoundary Component to provides */}
            <ErrorBoundary fallback={<ErrorElement />}>
                {/* Suspense provides fallback UI while waiting component fetching complete  */}
                <Suspense fallback={<FallbackComponent />}>
                    <Lazy count={1} />
                </Suspense>
            </ErrorBoundary>
        </>
    );
}

function FallbackComponent() {
    return <p>Loading...</p>;
}

function ErrorElement() {
    return <p>Error!</p>;
}
