// import Link from "next/link";
// import bannerImage4 from "../../../assets/HomePageBannerImg/2.png";
// import bannerImageOther from "../../../assets/HomePageBannerImg/bannerImageother.png";

// import ProductCard from "./ProductCard";
// import Image from "next/image";
// import CardSkeleton from "@/components/Skeleton/CardSkeleton";

// const BannerAndCard = () => {
//   const { data: maleLimit, isLoading, isError } = useGetDressMaleLimitQuery();

//   let content = null;

//   if (isLoading) {
//     content = (
//       <>
//         <CardSkeleton />
//         <CardSkeleton />
//         <CardSkeleton />
//         <CardSkeleton />
//       </>
//     );
//   }

//   if (!isLoading && isError) {
//     content = <Error message="There was an error" />;
//   }

//   if (!isLoading && !isError && maleLimit?.length === 0) {
//     content = <Error message="No Dress Found !" />;
//   }

//   if (!isLoading && !isError && maleLimit?.length > 0) {
//     content = maleLimit.map((maleLimitData) => (
//       <ProductCard key={maleLimitData.id} singleProduct={maleLimitData} />
//     ));
//   }

//   return (
//     <div className="my-5 grid grid-cols-1 gap-0 md:grid-cols-7 md:gap-5 lg:grid-cols-7 lg:gap-5">
//       <div className="col-span-2 mb-5">
//         {" "}
//         <div className="relative">
//           <div>
//             <Image
//               width={undefined}
//               src={bannerImage4}
//               alt=""
//               className="hidden w-full rounded-3xl md:block md:h-[100vh] lg:block lg:h-[100vh]"
//             />
//           </div>
//           <div className="flex w-full items-center justify-center">
//             <Image
//               width={undefined}
//               src={bannerImageOther}
//               alt=""
//               className="h-[50vh] w-[100vh] sm:block md:hidden lg:hidden"
//             />
//           </div>
//           <div className="absolute  bottom-0 flex h-full w-full items-end justify-center  pb-14 opacity-100 transition-all">
//             <div className="flex items-center justify-center text-center text-black">
//               <div className="mx-auto">
//                 <h3 className="text-[12px] font-bold uppercase">Gold Pierc</h3>
//                 <h1 className="font-smeibold my-2 text-[26px] uppercase">
//                   Flash Sale
//                 </h1>
//                 <h4>15 NOV - 25 NOV</h4>
//                 <Link href="/" className="mt-3 underline">
//                   See More Products
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="col-span-5 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
//         {content}
//       </div>
//     </div>
//   );
// };

// export default BannerAndCard;
