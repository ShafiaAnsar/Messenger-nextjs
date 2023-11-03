'use client'
import clsx from "clsx"
import {FieldErrors,FieldValues,UseFormRegister} from 'react-hook-form'
interface InputProps{
    label:string 
    id: string
    type?:string 
    required?:boolean
    register:UseFormRegister<FieldValues>
    errors:FieldErrors 
    disabled?:boolean

}
const Input:React.FC<InputProps> = ({label,id,type,register,required,errors,disabled}) => {
  return (
    <div className="">
        <label htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
        >
            {label}
        </label>
        <div className="mt-2">
        <input type={type} autoComplete={id} disabled={disabled} 
        {...register(id,{required})}
        className={clsx(`
        form-input block rounded-md w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6`,
        errors[id] && 'focus:ring-rose-500',
        disabled && 'opacity-50 cursor-default'
        )}
            />
        </div>
       
        
    </div>
  )
}

export default Input