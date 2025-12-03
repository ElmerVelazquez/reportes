import type { ButtonProps } from '../../../types/global';

const Button=({children,onClick,otherClass}:ButtonProps) => {
  
  return(
    <button onClick={onClick} type='button' className={`bg-blue-600 px-10 py-3 rounded-lg my-auto border hover:bg-white border-blue-800 hover:text-blue-600 hover:cursor-pointer active:bg-gray-200 font-bold ${otherClass}`}>{children}</button>
  )    
}

export default Button;