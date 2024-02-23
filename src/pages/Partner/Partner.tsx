import './Partner.scss'
import Form from "../../components/Form/Form"

const Partner = () => {
  return (
    <div className="partner">
      <div className="container">
         <div className="partner__content">
            <h2 className='partner__title'>VOODOOLAB</h2>
            <h3 className='partner__subtitle'>О проекте</h3>
            <p className="partner__info">Lorem ipsum dolor sit amet consectetur. Mattis at ultricies tristique amet a elementum odio habitasse. Gravida venenatis a faucibus quam risus donec consectetur consectetur non. Risus quis interdum quis vulputate aliquam neque. Sit blandit eget eu non. Pellentesque non arcu dui lectus elit in sed. Dictum rhoncus diam varius nisi nibh donec commodo sed suspendisse. Lacus ac viverra ipsum est tristique mauris purus duis. Lectus phasellus iaculis at at. Nunc porttitor pellentesque dolor sapien tellus sed in duis.</p>
            <h3 className='partner__subtitle'>Технологии</h3>
            <ul className="partner__list">
               <li className="partner__item"><img src={require('../../images/Rectangle.png')} alt="alt"/></li>
               <li className="partner__item"><img src={require('../../images/Rectangle.png')} alt="alt"/></li>
               <li className="partner__item"><img src={require('../../images/Rectangle.png')} alt="alt"/></li>
               <li className="partner__item"><img src={require('../../images/Rectangle.png')} alt="alt"/></li>
               <li className="partner__item"><img src={require('../../images/Rectangle.png')} alt="alt"/></li>
               <li className="partner__item"><img src={require('../../images/Rectangle.png')} alt="alt"/></li>
               <li className="partner__item"><img src={require('../../images/Rectangle.png')} alt="alt"/></li>
               <li className="partner__item"><img src={require('../../images/Rectangle.png')} alt="alt"/></li>
            </ul>
            <h3 className='partner__subtitle'>Результат</h3>
            <div className="partner__result">
              <button className='partner__btn'>Просмотр</button>
              <img src={require('../../images/partner1.png')} alt="alt"/>
            </div>
            <Form/>
         </div>
      </div>
    </div>
  )
}

export default Partner