import type { ReactNode } from "react";
import Button from "./Button";
import React from "react";

type inputProps = {
    title: string;
    placeholder: string;
    otherClass?: string;
}
type radioProps = {
    title: string;
    value: string;
    name: string;
    otherClass?: string;
}
type selectProps = {
    title: string;
    children: ReactNode;
    placeholder?: string;
    otherClass?: string;
}

const Form = () => {
    return(
        <div className="text-center text-black border-black h-full">  
            <h1 className="text-4xl mb-7">Generador de Documentos</h1>
            <form className="text-left flex flex-col h-8/10">
                <div className="flex gap-10">
                    <RadioButton title="Asignacion" value="interno" name="tipoDocumento"/>
                    <RadioButton title="Descargo" value="interno" name="tipoDocumento"/>
                </div>
                <div className="flex gap-10 mt-5">
                    <Select title="Tipo de Equipo" placeholder="Selecciona el tipo">
                        <option value="">Laptop</option>
                        <option value="">Mouse</option>
                        <option value="">Teclado</option>
                        <option value="">Monitor</option>
                    </Select>
                    <Select title="Modelo" placeholder="Selecciona el modelo">
                        <option value="">ultra</option>
                        <option value="">G15</option>
                        <option value="">Thinkpad</option>
                        <option value="">Legion</option>
                    </Select>
                    <Select title="Serie" placeholder="Selecciona el serial">
                        <option value="">1xxx-xxx</option>
                        <option value="">2xxx-xxx</option>
                        <option value="">3xxx-xxx</option>
                        <option value="">4xxx-xxx</option>
                    </Select>
                </div>
                <div className="flex gap-5">
                    <Input title="Responsable" placeholder="Ingrese el nombre del Responsable"/>
                    <Select title="Encargado" placeholder="Seleccione el encargado de entregar o recibir">
                        <option value="">Elmer Velaquez</option>
                        <option value="" className="text-gray-700">Soporte Tecnico</option>
                    </Select>
                </div>

                <Button otherClass="text-white max-w-60 mt-auto mb-0">Generar Documento</Button>
            </form>
        </div>
    )}

const RadioButton = ({title, value, name, otherClass}:radioProps) => {
    return(
        <label className={`flex items-center cursor-pointer ${otherClass}`}>
            <input type="radio" name={name} value={value} className="hidden peer" />
            <span className="w-6 h-6 rounded-full border-2 peer-checked:border-blue-500 flex flex-col items-center justify-center transition-colors peer-checked:[&>div]:opacity-100">
                <div className="w-4 h-4 bg-blue-500 rounded-full opacity-0"></div>
            </span>
            <span className="ml-2 text-gray-700 text-xl">{title}</span>
        </label>
    )}  
const Select = ({children,title,placeholder, otherClass}:selectProps) => {
    const [value, setValue] = React.useState("placeholder");
    return(
        <label className="block mb-4 w-full">
            <span className="text-xl ml-2">{title}</span>
            <select onChange={(e)=>{setValue(e.target.value)}} className={`appearance-none block border-gray-300 rounded-lg border w-full text-xl p-2 mt-1 max-h-40 ${value=="placeholder"?"text-gray-500":""} ${otherClass}`} >
                <option value="placeholder" selected disabled className="text-gray-300">{placeholder}</option>
                {children}
            </select>
        </label>
    )    
}

const TextArea = ({title,placeholder}:inputProps) => {
    return(
        <label className="block mb-4">
            <span className="text-xl ml-2">{title}</span>
            <textarea placeholder={placeholder} className="block border-gray-300 rounded-lg border w-full text-xl p-2 mt-1 max-h-30 min-h-30"></textarea>
        </label>
    )
}
const Input = ({title,placeholder}:inputProps) => {
    return(
        <label className="block mb-4 w-full">
            <span className="text-xl ml-2">{title}</span>
            <input placeholder={placeholder} className="border-gray-300 rounded-lg border w-full text-xl p-2 mt-1" type="text" />
        </label>
    )
}

export default Form;