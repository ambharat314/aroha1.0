import { useRouteError, Link } from "react-router";

export default function ErrorBoundary() {
  const error = useRouteError() as any;

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-6xl text-stone-800 mb-4 font-light">Oops!</h1>
        <p className="text-xl text-stone-600 mb-8">
          Something went wrong. {error?.statusText || error?.message || "Please try again."}
        </p>
        <Link
          to="/home"
          className="inline-block px-8 py-3 bg-[#8E270E] text-white rounded-full hover:opacity-90 transition-all duration-300"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
