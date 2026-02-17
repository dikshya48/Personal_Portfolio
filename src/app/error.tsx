'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6">
      <h1 className="text-6xl font-bold mb-4">Something went wrong!</h1>
      <p className="text-muted-foreground mb-8">
        {error.message || 'An unexpected error occurred'}
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
