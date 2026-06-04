import type { ErrorFallbackProps } from "./errorBoundary.type";

export default function ErrorBoundaryFallback({
  error,
  onRetry,
}: ErrorFallbackProps) {
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={onRetry}>Retry</button>
    </div>
  );
}
