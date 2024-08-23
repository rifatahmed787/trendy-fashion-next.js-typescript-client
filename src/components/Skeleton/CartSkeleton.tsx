export default function CartCardSkeleton() {
  return (
    <div className="min-w-full mt-5 border border-gray-300 rounded-xl p-2 flex items-center gap-10">
      <div className="flex gap-3">
        <div className="w-32 h-32 rounded-xl bg-gray-100 flex justify-center items-center">
          <svg
            className="w-16 h-16 text-gray-300 animate-pulse"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18"
          >
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div>
          <span className="block w-32 h-6 bg-gray-300 animate-pulse rounded mb-4"></span>
          <span className="block w-10/12 h-4 bg-gray-300 animate-pulse rounded mb-4"></span>
          <div className="flex items-center mt-5 duration-500">
            <span className="block w-24 h-6 bg-gray-300 animate-pulse rounded mr-2"></span>
            <span className="block w-8 h-8 bg-gray-300 animate-pulse rounded-full"></span>
          </div>
        </div>
      </div>
      <div>
        <span className="block w-32 h-6 bg-gray-300 animate-pulse rounded mb-4"></span>
      </div>
      <div>
        <span className="block w-32 h-6 bg-gray-300 animate-pulse rounded mb-4"></span>
      </div>
      <div>
        <span className="block w-32 h-6 bg-gray-300 animate-pulse rounded mb-4"></span>
      </div>
    </div>
  );
}
