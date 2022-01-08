import { ReactNode } from "react"

export const List = ({ children, customClassName }: { children: ReactNode, customClassName?: string }) => {
  return (
    <ul className={`flex items-center ${customClassName}`}>{children}</ul>
  )
}
