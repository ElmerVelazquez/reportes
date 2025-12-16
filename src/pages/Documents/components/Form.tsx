import {Button }from "@/components/ui/button";
import {Select, SelectTrigger, SelectValue, SelectContent, SelectItem} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import { RadioGroup,RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const Form = () => {
    return(
        <div className="text-center text-black border-black h-full">  

            <h1 className="text-4xl mb-7">Generador de Documentos</h1>

            <form className="text-left flex flex-col h-8/10">
                <div className="flex gap-10">
                <RadioGroup defaultValue="Asignacion" className="flex gap-10">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Asignacion" id="Asignacion" className=" hover:cursor-pointer"/>
                        <Label htmlFor="Asignacion" className="text-xl font-normal">Asignacion</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="Descargo" id="Descargo" />
                        <Label htmlFor="Descargo" className="text-xl font-normal">Descargo</Label>
                    </div>
                </RadioGroup>
                </div>
                <div className="flex gap-10 mt-5">
                    <label className="block mb-4 w-full">
                        <span className="text-xl ml-2">Tipo de Equipo
                        </span>  
                        <Select>      
                        <SelectTrigger className="w-full text-xl p-5">
                            <SelectValue placeholder="Selecciona el tipo" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem className="text-xl" value="1">Laptop</SelectItem>
                            <SelectItem className="text-xl" value="2">Mouse</SelectItem>
                            <SelectItem className="text-xl" value="3">Teclado</SelectItem>
                            <SelectItem className="text-xl" value="4">Monitor</SelectItem>
                        </SelectContent>
                        </Select>
                    </label>
                    <label className="block mb-4 w-full">
                        <span className="text-xl ml-2">Modelo
                        </span>  
                        <Select>      
                        <SelectTrigger className="w-full text-xl p-5">
                            <SelectValue placeholder="Selecciona el modelo" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem className="text-xl" value="1">ultra</SelectItem>
                            <SelectItem className="text-xl" value="2">G15</SelectItem>
                            <SelectItem className="text-xl" value="3">Thinkpad</SelectItem>
                            <SelectItem className="text-xl" value="4">Legion</SelectItem>
                        </SelectContent>
                        </Select>
                    </label>
                    <label className="block mb-4 w-full">
                        <span className="text-xl ml-2">Serie
                        </span>  
                        <Select>      
                        <SelectTrigger className="w-full text-xl p-5">
                            <SelectValue placeholder="Selecciona el serial" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem className="text-xl" value="1">1xxx-xxx</SelectItem>
                            <SelectItem className="text-xl" value="2">2xxx-xxx</SelectItem>
                            <SelectItem className="text-xl" value="3">3xxx-xxx</SelectItem>
                            <SelectItem className="text-xl" value="4">4xxx-xxx</SelectItem>
                        </SelectContent>
                        </Select>
                    </label>
                </div>
                <div className="flex gap-5">
                    <label className="block mb-4 w-full">
                        <span className="text-xl ml-2">Receptor
                        </span>  
                        <Select>      
                        <SelectTrigger className="w-full text-xl p-5">
                            <SelectValue placeholder="Ingrese el receptor del Documento" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem className="text-xl" value="1">Elmer Velazquez</SelectItem>
                        </SelectContent>
                        </Select>
                    </label>
                    <label className="block mb-4 w-full">
                        <span className="text-xl ml-2">Emisor
                        </span>  
                        <Select>      
                        <SelectTrigger className="w-full text-xl p-5">
                            <SelectValue placeholder="Seleccione el emisor del documento" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem className="text-xl" value="1">Elmer Velaquez</SelectItem>
                            <SelectItem className="text-xl" value="2">Soporte Tecnico</SelectItem>
                        </SelectContent>
                        </Select>
                    </label>
                </div>
                <label className="mb-3">
                    <span className="text-xl ml-2">Observaciones</span>
                    <Textarea className="min-h-32 text-xl!" placeholder="Ingrese las observaciones aqui"/>
                </label>

                <Button>Generar Documento</Button>
            </form>
        </div>
    )}

export default Form;