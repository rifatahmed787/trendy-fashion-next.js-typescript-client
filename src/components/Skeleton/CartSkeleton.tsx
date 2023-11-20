export default function CartCardSkeleton() {
  return (
    <div className="min-w-full grid grid-cols-1 bg-gray-50  sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 ">
      <div className="flex w-full my-5">
        <div className="h-28 w-28 bg-gray-100 animate-pulse mx-5 md:mx-10 "></div>
        <div className="flex flex-col justify-between mx-4 flex-grow ">
          <span className="font-bold text-sm h-10 animate-pulse"></span>
          <span className="font-bold text-sm py-3 bg-slate-100 animate-pulse"></span>
          <button className="font-semibold hover:text-red-500 text-gray-500 text-xs flex items-center bg-gray-100 animate-pulse"></button>
        </div>
      </div>

      <div className="flex justify-center items-center mx-3 md:mx-5">
        <button>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
        <input
          className="mx-2 border text-center w-8 px-1 bg-gray-100 animate-pulse"
          type="text"
          readOnly
        />
        <button>
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </button>
      </div>
      <span className="text-center w-1/4 font-semibold text-sm flex justify-center items-center"></span>
    </div>
  );
}
