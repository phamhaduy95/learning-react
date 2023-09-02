// Since Vite use esbuild as compiler instead of tsc. It enforce isolatedModule: true setting by default.

export type CardProps = {
    className?: string;
    header?: React.ReactNode;
    body?: React.ReactNode;
    footer?: React.ReactNode;
};
