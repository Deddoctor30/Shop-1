import { FC, useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import IButton from '../../UI/buttons/IButton'
import './Form.scss'

interface FormProps {
   price?: string
}

interface FormDataType {
   name:string, 
   email: string, 
   phone: string,
   service: string,
   text: string,
   checkBox: boolean
}

const Form: FC<FormProps> = ({price}) => {
   const [priceValue, setPriceValue] = useState<string | undefined>(price)

   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [phone, setPhone] = useState("")
   const [service, setService] = useState("")
   const [text, setText] = useState("")
   const [checkBox, setCheckBox] = useState(false)

   const responseBody: FormDataType = {name: "", email: "", phone: "0", service: '', text: '', checkBox: false}

   const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      responseBody.name = name
      responseBody.email = email
      responseBody.phone = phone
      responseBody.service = service
      responseBody.text = text
      responseBody.checkBox = checkBox
      console.log(JSON.stringify(responseBody))
   }

   const inputChangeHandler = (setFunction: React.Dispatch<React.SetStateAction<string>>, e: React.ChangeEvent<HTMLInputElement>) => {
      setFunction(e.target.value)
   }


  return (
   <section className="form">
      <form onSubmit={onSubmitHandler}>
         <h3 className='form__title'>Давайте начнём работу!</h3>
         <div className="form__wrapper">
         <div className="form__contacts">
            <div className="form__contact-us">Или вы свяжитесь с нами</div>
            <ul className="form__phones">
               <li className="form__phone">+7(904) 806-64-24</li>
               <li className="form__phone">+7(904) 806-64-24</li>
               <li className="form__phone">@denyweb35</li>
               <li className="form__phone">mwebsites@gmail.com</li>
            </ul>
         </div>
            <div className="form__inputs inputs">
               <div className="inputs__inner">
                  <input className='inputs__input' placeholder='Имя' type="text" onChange={(e)=>inputChangeHandler(setName, e)}/>
                  <input className='inputs__input' placeholder='E-mail' type="email" onChange={(e)=>inputChangeHandler(setEmail, e)}/>
                  <input className='inputs__input' placeholder='Телефон' type="phone" onChange={(e)=>inputChangeHandler(setPhone, e)}/>
                  <input className='inputs__input' placeholder='Услуга' type="text" onChange={(e)=>inputChangeHandler(setService, e)}/>
               </div>
               <input className='inputs__input' placeholder={priceValue} type="text" onChange={(e)=>inputChangeHandler(setText, e)}/>
               <label className='inputs__accept' htmlFor="accept">Lorem ipsum dolor sit amet consectetur. Enim turpis pretium adipiscing id purus. Auctor est sem erat quisque
               <input className='inputs__checkbox' name='accept' id='accept' type="checkbox" required />
                  <span className='inputs__checkmark'></span>
               </label>
               <div className="inputs__buttons">
               <IButton content={'Отправить'} styles={{width: '480px'}} type='submit'/>
               {
                  !price &&
                  <Link to="/calculation"><IButton content={'Расчитать стоимость'} styles={{backgroundColor: 'inherit', border: '1px solid gray', width: '220px'}}/></Link>
               }
            </div>
         </div>
         </div>
      </form>
 </section>

  )
}

export default Form