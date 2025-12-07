import type {ReactNode} from "react";
import Button from "./Button";


type inputProps = {
    title: string;
    placeholder: string;
    otherClass?: string;
}
type radioProps = {
    title: string;
    value: string;
    name: string;
    defaultChecked?: boolean;
    otherClass?: string;
}
type selectProps = {
    title: string;
    children: ReactNode;
    placeholder?: string;
    otherClass?: string;
}
type optionProps = {
    value: string;
    children: ReactNode;
}

const Form = () => {
    return(
        <div className="text-center text-black border-black h-full">  
            <h1 className="text-4xl mb-7">Generador de Documentos</h1>
            <form className="text-left flex flex-col h-8/10">
                <div className="flex gap-10">
                    <RadioButton title="Asignacion" value="interno" name="tipoDocumento" defaultChecked/>
                    <RadioButton title="Descargo" value="interno" name="tipoDocumento" />
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
                    <Select title="Encargado" placeholder="Seleccione el encargado">
                        <option value="">Elmer Velaquez</option>
                        <option value="">Soporte Tecnico</option>
                    </Select>
                </div>
                <TextArea title="Observaciones" placeholder="Ingrese las observaciones aqui"/>

                <Button otherClass="text-white max-w-60 mt-auto mb-0">Generar Documento</Button>
            </form>
        </div>
    )}

const RadioButton = ({title, value, name,defaultChecked, otherClass}:radioProps) => {
    return(
        <label className={`flex items-center cursor-pointer ${otherClass}`}>
            <input type="radio" name={name} value={value} defaultChecked={defaultChecked} className="hidden peer" />
            <span className="ml-2 text-gray-700 text-xl">{title}</span>
        </label>
    )}  
const Select = ({children,title,placeholder, otherClass}:selectProps) => {
    return(
        <label className="block mb-4 w-full">
            <span className="text-xl ml-2">{title}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" className="absolute h-20 w-20 ml-1 top-2.5 right-2.5 text-slate-900">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
            </svg>
            </span>
            <select className={`appearance-none block border-gray-300 rounded-lg border w-full text-xl p-2 mt-1 max-h-40 ${otherClass}`} >
                <option value="" selected disabled className="text-gray-300">{placeholder}</option>
                {children}

            </select>
        </label>
    )    
}
const Option = ({value,children}:optionProps) => {
    return(
        <option value={value}>{children}</option>
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