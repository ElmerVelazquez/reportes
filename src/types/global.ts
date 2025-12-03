export type View = 'dashboard' | 'documents';

export type itemProps = {
  empresa: "Innovix" | "Concentra",
  tipo: "Asignacion" | "Entrega",
  equipo: "Laptop" | "Flota" | "Monitor" | "Mouse" | "Teclado" | "Chip",
  firmante: string,
  responsable: string,
  fecha: string,
};

export type ModalProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  children?: React.ReactNode;
}

export type ButtonProps = {
  children?: React.ReactNode;
  onClick?: (any:any)=>void;
  otherClass?: string;
}