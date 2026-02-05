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
                className="flex-1 border-white border-2 text-white rounded-[10px] xs:w-[300px] md:w-[350px] p-[13px] bg-transparent hover:bg-white hover:text-black focus:bg-white focus:text-black hover:border-black focus:border-black placeholder:text-gray-500"
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
                className="flex-1 bg-transparent border-white border-2 text-white rounded-[10px] xs:w-[300px] md:w-[350px] p-[15px] hover:bg-white hover:text-black focus:bg-white focus:text-black hover:border-black focus:border-black placeholder:text-gray-500"
                value={value}
                onChange={onChange}
            />
        )

    }
    else return <></>;
}