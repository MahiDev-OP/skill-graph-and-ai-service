'use client';

type ErrorProps = {
    error: Error;
    reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
    return (
        <div className="p-8 text-center">
            <h2 className="text-xl font-semibold text-red-600">Something went wrong!</h2>
            <p className="text-black font-bold my-2">{error.message}</p>
            <button
                onClick={reset}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
                Try Again
            </button>
        </div>

    );
};

export default Error;
