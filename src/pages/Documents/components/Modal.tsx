import {useEffect, useState } from "react";
import type { ModalProps } from "../../../types/global";


const Modal = ({isOpen,setIsOpen,children}:ModalProps) => {
  const [visible,setVisible] = useState(false);
  const [animacion,setAnimacion] = useState('');

  useEffect(()=>{
    if(isOpen){
      setVisible(true);
      const timeout = setTimeout(()=>{setAnimacion('transition-all duration-400 ease-in-out transform translate-y-160')},1);
      return () => clearTimeout(timeout);
    }else{
      setAnimacion('transition-all duration-300 ease-in-out transform translate-y-0');
      const timeout = setTimeout(()=>{setVisible(false);},400);
      return () => clearTimeout(timeout);
    } 
  },[isOpen]);

  if(!visible)return null;
  return (
    <div className="w-full h-full fixed top-0 left-0 bg-black/50">
      <div className={`text-right w-3/4 h-150 fixed left-1/8 -top-150 bg-white border border-black z-50 p-10 rounded-lg shadow-lg ${animacion}`}>
        <button onClick={()=>{setIsOpen(false)}} className="hover:opacity-70 p-2 rounded-full bg-gray-200 text-black cursor-pointer">
          <svg fill="currentColor" height="20" icon-name="close" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M11.273 10l5.363-5.363a.9.9 0 10-1.273-1.273L10 8.727 4.637 3.364a.9.9 0 10-1.273 1.273L8.727 10l-5.363 5.363a.9.9 0 101.274 1.273L10 11.273l5.363 5.363a.897.897 0 001.274 0 .9.9 0 000-1.273L11.275 10h-.002z"></path></svg>
        </button>
        {children}
        
      </div>
    </div>
  )
}

export default Modal;