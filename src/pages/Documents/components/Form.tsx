import type { ReactNode } from "react";
import Button from "./Button";

type inputProps = {
    title: string;
    placeholder: string;
    otherClass?: string;
}
type selectProps = {
    title: string;
    children: ReactNode;
    otherClass?: string;
}

const Form = () => {
    return(
        <div className="text-center text-black border-black h-full">  
            <h1 className="text-4xl mb-7">Generador de Documentos</h1>
            <form className="text-left flex flex-col h-8/10">
                <div className="flex gap-5">
                    <Input title="Nombre del Documento" placeholder="Ingrese el nombre del documento"/>
                    <Select title="Responsable">
                        <option value="">Elmer</option>
                        <option value="">Soporte</option>
                    </Select>
                </div>
                <div className="flex gap-5">
                    <Input title="Nombre del Documento" placeholder="Ingrese el nombre del documento"/>
                    <Select title="Responsable">
                        <option value="">Elmer</option>
                        <option value="">Soporte</option>
                    </Select>
                </div>


                {/* <TextArea title="Notas Adicionales" placeholder="Escribe tus notas" /> */}
                <Button otherClass="text-white max-w-60 mt-auto mb-0">Generar Documento</Button>
            </form>
        </div>
    )}

const Select = ({children,title, otherClass}:selectProps) => {
    return(
        <label className="block mb-4 w-full">
            <span className="text-xl ml-2">{title}</span>
            <select className={`appearance-none block border-gray-300 rounded-lg border w-full text-xl p-2 mt-1 max-h-40 ${otherClass}`} >
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