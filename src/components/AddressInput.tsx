import React from "react";
import { UseFormRegister } from "react-hook-form";

interface AddressInputProps {
    register: any;
    inputText: string;
    setInputText: React.Dispatch<React.SetStateAction<string>>;
}
export default function AddressInput({
    register,
    inputText,
    setInputText,
}: AddressInputProps) {
    return (
        <input
            type="text"
            placeholder="Type in an address"
            className=""
            {...register("address", { required: true })}
            value={inputText}
            onChange={(e) => {
                setInputText(e.target.value);
            }}
        />
    );
}
