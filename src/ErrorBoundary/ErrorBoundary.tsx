import React from "react";
import type {
  ErrorBoundaryProps,
  ErrorBoundaryState,
} from "./errorBoundary.type";

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error(error);
    console.error(errorInfo);
  }

  handleRetry = () => {
    this.setState((prev) => {
      return {
        error: null,
        hasError: false,
        retries: prev.retries + 1,
      };
    });
  };

  render(): React.ReactNode {
    const { error, hasError, retries } = this.state;
    const { fallback: Fallback, children } = this.props;

    if (hasError && error instanceof Error) {
      return <Fallback error={error} onRetry={this.handleRetry} />;
    }

    return <div key={retries}>{children}</div>;
  }
}

export default ErrorBoundary;
