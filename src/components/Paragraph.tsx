import { ReactNode } from "react"


interface IParagraph{
    children:ReactNode;
    className?:string;
}

const Paragraph = ({children,className}:IParagraph) => {
  return (
    <div className={className}>{children}</div>
  )
}

export default Paragraph