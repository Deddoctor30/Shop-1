import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__contacts contacts">
            <div className="contacts__inner">
              <div className="contacts__logo logo">
                <div className="logo__image"></div>
                <div className="logo__text">M-WEB</div>
              </div>
              <div className="contacts__tel">+7(904) 806-64-24</div>
              <div className="contacts__email">mwebsites74@gmail.com</div>
            </div>
            <div className="contacts__socials socials">
              <div className="socials__item"></div>
              <div className="socials__item"></div>
              <div className="socials__item"></div>
              <div className="socials__item"></div>
            </div>
            <div className="footer__work work">
              <h4 className='work__title'>Время работы</h4>
              <ul className="work__items">
                <li className="work__item">Пн-Пт c 7:00 до 18:00</li>
                <li className="work__item">Звонки принимаются в рабочее время</li>
                <li className="work__item">Обращения в соц.сетях рассматриваются 24/7</li>
              </ul>
            </div>
            <div className="footer__time time">
              <h4 className='time__title'>О M-WEB</h4>
              <ul className="time__items">
                <li className="time__item">Проекты</li>
                <li className="time__item">О нас</li>
                <li className="time__item">Карьера в M-WEB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer