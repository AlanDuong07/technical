import React, { useState } from "react";
import AddressInput from "./AddressInput";
import { useForm } from "react-hook-form";
export interface HouseDataType {
    id: number;
    address: string;
    email: string;
    price: number;
    location: string;
}

interface SearchBarProps {
    houseArray: HouseDataType[];
    setHouseArray: React.Dispatch<React.SetStateAction<HouseDataType[]>>;
}
export default function SearchBar({
    houseArray,
    setHouseArray,
}: SearchBarProps) {
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [inputText, setInputText] = useState<string>("");
    const onSubmit = handleSubmit((data) => {
        // Filter based on the address inputted
        const input = data.address;
        let filteredHouseState = houseArray.filter(
            (houseData: HouseDataType) => {
                return houseData.address.includes(input);
            }
        );

        setHouseArray(filteredHouseState);

        setInputText("");
    });
    return (
        <form onSubmit={onSubmit}>
            <label>Address</label>
            <AddressInput
                register={register}
                setInputText={setInputText}
                inputText={inputText}
            />
            <button type="submit">Submit</button>
            {errors.address && (
                <span className="text-red-400">This field is required</span>
            )}
        </form>
    );
}
