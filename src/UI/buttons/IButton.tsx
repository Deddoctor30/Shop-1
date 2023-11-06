import { FC, ReactNode } from 'react';
import './IButton.scss';

interface IButtonProps {
   content: ReactNode
   styles?: {}
}

const IButton: FC <IButtonProps> = ({content, styles}) => {
  return (
    <button style={styles} className='button'>
      {content}
    </button>
  )
}

export default IButton