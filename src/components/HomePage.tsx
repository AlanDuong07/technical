import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import AddressInput from "./AddressInput";
import SearchBar from "./SearchBar";
import { HouseDataType } from "./SearchBar";
import HouseCard from "./HouseCard";
const houseJSONArray: HouseDataType[] = [
    {
        id: 1,
        address: "123 Main St",
        email: "owner1@example.com",
        price: 50,
        location: "Stanford, CA",
    },
    {
        id: 2,
        address: "456 Pine St",
        email: "owner2@example.com",
        price: 60,
        location: "San Francisco, CA",
    },
    {
        id: 3,
        address: "789 Oak St",
        email: "owner3@example.com",
        price: 20,
        location: "Menlo Park, CA",
    },
    {
        id: 4,
        address: "1011 Shagworm St",
        email: "owner4@example.com",
        price: 90,
        location: "New York, NY",
    },
];

export default function HomePage() {
    const [houseArray, setHouseArray] =
        useState<HouseDataType[]>(houseJSONArray);

    return (
        <main className="w-screen flex flex-col justify-between items-center">
            {/* Input  */}
            <SearchBar houseArray={houseArray} setHouseArray={setHouseArray} />
            {/* { House cards} */}
            <div className="flex flex-col gap-4 justify-start items-center mt-10">
                {houseArray.map((houseData) => (
                    <HouseCard key={houseData.id} houseData={houseData} />
                ))}
            </div>
        </main>
    );
}
