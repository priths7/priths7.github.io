import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import { FC } from "react";

interface FormInputProps {
    name: string,
    placeholder: string,
    value: string,
    onChange: (e: any) => void,
    rows?: number,
    type: 'input' | 'textarea',

}

export const FormInput: FC<FormInputProps> = ({ name, placeholder, value, onChange, rows, type }) => {

    if (type === 'input') {
        return (
            <Input
                name={name}
                placeholder={placeholder}
                className="w-full border-2 border-white bg-transparent p-[13px] text-white placeholder:text-gray-500 hover:border-black hover:bg-white hover:text-black focus:border-black focus:bg-white focus:text-black"
                value={value}
                onChange={onChange}
            />
        )
    }
    else if (type === 'textarea') {
        return (
            <TextArea
                name={name}
                placeholder={placeholder}
                rows={3}
                className="w-full border-2 border-white bg-transparent p-[15px] text-white placeholder:text-gray-500 hover:border-black hover:bg-white hover:text-black focus:border-black focus:bg-white focus:text-black"
                value={value}
                onChange={onChange}
            />
        )

    }
    else return <></>;
}
