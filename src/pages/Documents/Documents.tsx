import List, {ListItem} from "./components/List";
import type { itemProps } from '../../types/global';
import  Modal from "./components/Modal";
import { useState } from "react";
import Form from "./components/Form";
import Button from "./components/Button";

const items:itemProps = 
  {
    empresa: "Concentra",
    tipo: "Asignacion",
    equipo: "Laptop",
    firmante: "Elmer",
    responsable: "Redes",
    fecha: "2025-11-05"
  }


const DocumentGenerator = () => {
  const [isOpen,setIsOpen] = useState(false);
  return(
    <section className="min-w-5xl md:mx-20">
      <div className="flex justify-end">
          <Button onClick={()=>setIsOpen(true)}>Generar Documento</Button>
      </div>
      <div className="flex justify-center text-2xl">
          <h1 className="font-bold">Documentos Recientes</h1>
      </div>
      
      <List>
        <ListItem 
          {...items}
        />
        <ListItem
          empresa="Innovix"
          tipo="Asignacion"
          equipo="Laptop"
          firmante="Elmer"
          responsable="Soporte y innovacion de utilidades"
          fecha="2025-11-05"
        />
        <ListItem
          empresa="Innovix"
          tipo="Asignacion"
          equipo="Laptop"
          firmante="Elmer Nicolas Velazquez Matos"
          responsable="Soporte"
          fecha="2025-11-05"
        />
      </List>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} >
        <Form></Form>
      </Modal>
    </section>
  )    
};
export default DocumentGenerator;

