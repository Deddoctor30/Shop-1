import Form from "../../components/Form/Form"
import { useContext } from 'react';
import { CalculationContext } from "../../App";
import { Link } from "react-router-dom";
import './Price.scss'

const Price = () => {
  const params = useContext(CalculationContext);
  let currentPages = params?.pages
  let currentCustomers = params?.customers
  const _formul = {
    page: 2000,
    design: 3000,
    layout: 1000,
    crm: 5000,
    onlinePayment: 8000,
    apps: 6000,
    visited: 10
  }
  switch (params.pages) {
    case '3':
      currentPages = '1-3'
      break;
    case '6':
      currentPages = '3-6'
      break;
    case '10':
      currentPages = '6-10'
      break;
    case '12':
      currentPages = '12+'
      break;
    default:
      currentPages = params?.pages
  }
  
  switch (params?.customers) {
    case '100':
      currentCustomers = '50 - 100'
      break;
    case '10000':
      currentCustomers = '100 - 10.000'
      break;
    case '300000':
      currentCustomers = '10.000 - 300.000'
      break;
    case '1000000':
      currentCustomers = '300.000 - 1.000.000'
      break;
    default:
      currentCustomers = params?.customers
  }

  const totalPrice = (_formul.page * +params?.pages) 
    + (params?.functions[0] ? _formul.design : 0) 
    + (params?.functions[1] ? _formul.layout : 0)
    + (params?.functions[2] ? _formul.crm : 0)
    + (params?.functions[3] ? _formul.onlinePayment : 0)
    + (params?.functions[4] ? _formul.apps : 0)
    + (_formul.visited * (+params?.customers > 300000 ? 12000 : +params?.customers))

    function numberWithSpaces(x: number) {
      const parts = x.toString().split(".");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      return parts.join(".");
    }

    const formPrice: string = 
    `${params?.functions[0] ? 'Дизайн макет;' : ''} ${params?.functions[1] ? `Верстка ${currentPages} страниц сайта;` : ''} ${params?.functions[2] ? 'Подключение к CRM;' : ''} ${params?.functions[3] ? 'Наличие онлайн оплаты;' : ''} ${params?.functions[4] ? 'Наличие приложения;' : ''}`

    console.log(formPrice);
    

  return (
    <div className="price">
      <div className="container">
        <div className="price__content">
          <h2 className='price__title'>СТОИМОСТЬ</h2>
          <p className="price__subtitle">Стоимость проекта составит ~ <span className="price__total">{numberWithSpaces(totalPrice)}</span> рублей, для точного расчёта пожалуйста, оставьте заявку для связи или свяжитесь с нами самостоятельно прикрепив скриншоть рассчёта в сообщение.</p>
          <p className="price__price-in">В расчёт входит:</p>
          <ul className="price__list">
            {params?.functions[0] ? <li className="price__item">Дизайн макет</li> : null}
            {params?.functions[1] ? <li className="price__item">Верстка {currentPages} страниц сайта</li> : null}
            {params?.functions[2] ? <li className="price__item">Подключение к CRM</li> : null}
            {params?.functions[3] ? <li className="price__item">Наличие онлайн оплаты</li> : null}
            {params?.functions[4] ? <li className="price__item">Наличие приложения</li> : null}
            <li className="price__item">Нагрузка на сайт - {currentCustomers} Человек</li>
          </ul>
          <Link to="/calculation"><button className='price__btn'>Вернуться к расчету</button></Link>
          <Form price={formPrice}/>
        </div>
      </div>
    </div>
  )
}

export default Price