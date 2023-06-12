import React from "react";
import { HouseDataType } from "./SearchBar";
interface HouseCardProps {
    houseData: HouseDataType;
}
export default function HouseCard({ houseData }: HouseCardProps) {
    return (
        // <div
        //     key={houseData.id}
        //     className="flex text-xl flex-col truncate w-screen max-w-lg b items-center border border-black/10 rounded-xl gap-10 p-4"
        // >
        //     <h1 className="">
        //         <span className="font-bold  tracking-tight">Address: </span>
        //         {houseData.address}
        //     </h1>
        //     <p className="">
        //         <span className="font-bold  tracking-tight">Email: </span>{" "}
        //         {houseData.email}
        //     </p>

        //     <p> <span className="font-bold  tracking-tight">Price: </span> {houseData.price}</p>
        // </div>
        <div key={houseData.id} className="group relative w-screen max-w-sm border border-black/10 p-4 rounded-2xl">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <div className="h-full w-full object-cover object-center lg:h-full lg:w-full bg-indigo-600" />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {houseData.address}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                        {houseData.email}
                    </p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                    {houseData.price}
                </p>
            </div>
        </div>
    );
}
