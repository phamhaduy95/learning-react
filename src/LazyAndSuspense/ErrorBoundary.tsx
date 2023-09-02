import React from 'react';

type ErrorBoundaryProps = {
    children: React.ReactNode;
    fallback?: React.ReactNode;
};

type ComponentState = {
    hasError: React.ReactNode;
};

const defaultProps: ErrorBoundaryProps = {
    children: <></>,
    fallback: <></>,
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ComponentState> {
    constructor(props: ErrorBoundaryProps) {
        super({ ...defaultProps, ...props });
        this.state = { hasError: false };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        this.setState({ hasError: true });
        console.log(error);
    }

    render(): React.ReactNode {
        if (this.state.hasError) return <>{this.props.fallback}</>;
        return this.props.children;
    }
}
