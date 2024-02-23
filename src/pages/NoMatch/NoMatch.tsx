import { Link } from "react-router-dom"
import IButton from "../../UI/buttons/IButton"
import './NoMatch.scss'

const NoMatch = () => {
  return (
      <div className="noMatch">
         <h3 className="noMatch__title">Упс! Такая страница не найдена</h3>
         <div className="noMatch__btn">
          <Link to='/'><IButton content={'Вернуться на главную'} styles={{margin: '15px 8px'}}/></Link>
         </div>
      </div>
  )
}

export default NoMatch