import type { ReactNode } from "react";
import type { itemProps } from "../../../types/global";
import logoConcentra from "@assets/400x100_concentra.png"
import logoInnovix from "@assets/400x100_innovix.png"

const List = ({children}:{children:ReactNode}) => {
  return(
<div className="p-10 bg-gray-800 mt-10">
      <table className="border-spacing-y-2 border-separate text-center w-full">
        <thead className="">
          <tr className="">
            <th className="px-5 py-2 "><div className="border border-white w-5 h-5 hover:cursor-pointer"></div></th>
            <th className="px-5 py-2">Empresa</th>
            <th className="px-5 py-2">Tipo</th>
            <th className="px-5 py-2">Equipo</th>
            <th className="px-5 py-2">Firmante</th>
            <th className="px-5 py-2">Responsable</th>
            <th className="px-5 py-2">Fecha</th>
          </tr>
        </thead>
        <tbody className="">
          {children}
        </tbody>
      </table>
      <div className="text-center mt-10"><h3>pagina: 1</h3></div>
    </div>
  )
};
export const ListItem = ({empresa,tipo,equipo,firmante,responsable,fecha}:itemProps) => {
  return(
    <tr className=" bg-gray-950 hover:cursor-pointer hover:bg-gray-400 hover:text-black! transition-colors duration-200">
      <td className=" px-5 py-7 rounded-l-lg"><div className="border border-white w-5 h-5"></div></td>
      <td className=" px-5 py-7 flex justify-center"><img className="max-w-30" src={empresa==="Concentra"?logoConcentra:logoInnovix} alt="" /></td>
      <td className=" px-5 py-7">{tipo}</td>
      <td className=" px-5 py-7">{equipo}</td>
      <td className=" px-5 py-7">{firmante}</td>
      <td className=" px-5 py-7 break-normal">{responsable}</td>
      <td className=" px-5 py-7 rounded-r-lg">{fecha}</td>
    </tr>    
  )};
  
  export default List;