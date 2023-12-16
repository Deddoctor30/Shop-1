import IButton from '../../UI/buttons/IButton';
import { Link } from "react-router-dom";
import './Cases.scss';

const Cases = () => {
  return (
    <div className='cases'>
      <div className="container">
        <div className='cases__content'>
          <h2 className='cases__title'>УСЛУГИ</h2>
          <div className="cases__wrapper">
            <div className="cases__info info">
              <h4 className='info__subtitle'>РАЗРАБОТКА</h4>
              <div className="info__text">Lorem ipsum dolor sit amet consectetur. At suspendisse magna mauris condimentum enim diam tempus non sagittis. Lectus odio mattis a lacus massa aliquet ornare. Tellus amet tempus volutpat non nunc ullamcorper sodales. Molestie aliquet donec sapien amet libero ut sagittis quam malesuada. Interdum quis risus sit orci tincidunt nunc sed. A pharetra elit nulla ut.</div>
              <Link to="/calculation"><IButton content={'Расчитать стоимость'} styles={{maxWidth: '280px'}}/></Link>
            </div>
            <div className="cases__action">
              <div className="cases__item">АВТОМАТИЗАЦИЯ</div>
              <div className="cases__item">РАЗРАБОТКА</div>
              <div className="cases__item">ВЕБ-САЙТ</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cases