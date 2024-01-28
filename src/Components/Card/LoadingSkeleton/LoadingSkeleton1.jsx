import React from "react";

const LoadingSkeleton1 = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
      {Array.from({ length: 5 })
        .fill(1)
        .map((_,index) => {
          return (
            <div className="p-4 w-full bg-white rounded-lg overflow-hidden shadow hover:shadow-md animated-pulse">
              <div className="flex flex-col gap-4">
                <div className="rounded w-full h-48 bg-gray-200"></div>
                <div className="flex flex-col gap-2 ">
                  <div className="w-full h-3 bg-gray-200 rounded-md"></div>
                  <div className="w-5/6 h-3 bg-gray-200 rounded"></div>
                  <div className="w-4/6 h-3 bg-gray-200 rounded"></div>
                </div>

                <div className="grid grid-cols-5 gap-2 mt-4">
                  <div className="w-full h-3 bg-gray-200 rounded"></div>
                  <div className="w-full h-3 bg-gray-200 rounded"></div>
                  <div className="w-full h-3 bg-gray-200 rounded"></div>
                  <div className="w-full h-3 bg-gray-200 rounded"></div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-gray-200 w-10 h-10"></div>
                  <div className="w-5/12 h-3 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default LoadingSkeleton1;
