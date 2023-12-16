import { FC, ReactNode } from 'react';
import './IButton.scss';


interface IButtonProps {
   content: ReactNode
   styles?: {}
   form?: string
   type?: "button" | "submit" | "reset" | undefined
}

const IButton: FC <IButtonProps> = ({content, styles, form, type}) => {
  return (
    <button style={styles} form={form} className='button' type={type}>
      {content}
    </button>
  )
}

export default IButton