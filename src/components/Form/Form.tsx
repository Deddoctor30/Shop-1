import { FC } from 'react'
import { Link } from "react-router-dom";
import IButton from '../../UI/buttons/IButton'
import { FormDataType } from '../../types/formType';
import './Form.scss'

import { Formik, Field, Form as FormK, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface FormProps {
   price?: string
}

const Form: FC<FormProps> = ({price}) => {
   const formSchema = Yup.object().shape({
      name: Yup.string().min(2, 'Не менее 3-х символов').max(20, 'Не более 20-ти символов').required('Обязательное поле'),
      email: Yup.string().email().required('Обязательное поле'),
      phone: Yup.number().required('Обязательное поле'),
      service: Yup.string().max(20, 'Не более 20-ти символов'),
      comment: Yup.string().max(20, 'Не более 20-ти символов'),
      accept: Yup.boolean().oneOf([true], 'Обязательное поле'),
    });

  return (
   <Formik 
      initialValues={{name: '', email: '', phone: '', service: '', comment: '', accept: false}} 
      onSubmit={(values: FormDataType, { setSubmitting }: FormikHelpers<FormDataType>) => {
         console.log(JSON.stringify(values))
         setSubmitting(false);
      }}
      validationSchema={formSchema}
   >
         {({errors, touched}) => (
            <section className="form">
               <FormK>
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
                           <div className='inputs__item'>
                              <Field className='inputs__input' id='name' name='name' placeholder='Имя'></Field>
                              {errors.name && touched.name ? (<div className='inputs__error'>{errors.name}</div>): null}
                           </div>
                           <div className='inputs__item'>
                              <Field className='inputs__input' id='email' name='email' placeholder='Почта' type='email'/>
                              {errors.email && touched.email ? (<div className='inputs__error'>{errors.email}</div>): null}
                           </div>
                           <div className='inputs__item'>
                              <Field className='inputs__input' id='phone' name='phone' placeholder='Телефон' type="phone"/>
                              {errors.phone && touched.phone ? (<div className='inputs__error'>{errors.phone}</div>): null}
                           </div>
                           <div className='inputs__item'>
                              <Field className='inputs__input' id='service' name='service' placeholder='Услуга'/>
                              {errors.service && touched.service ? (<div className='inputs__error'>{errors.service}</div>): null}
                           </div>
                        </div>
                        <Field className='inputs__input' id='comment' name='comment' placeholder={price}/>
                        {errors.comment && touched.comment ? (<div className='inputs__error'>{errors.comment}</div>): null}
                        <label className='inputs__accept' htmlFor="accept">Lorem ipsum dolor sit amet consectetur. Enim turpis pretium adipiscing id purus. Auctor est sem erat quisque
                           <Field className='inputs__checkbox' name='accept' id='accept' type="checkbox" />
                           {errors.accept && touched.accept ? (<div className='inputs__error'>{errors.accept}</div>): null}
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
               </FormK>
            </section>
         )}
   </Formik>

  )
}

export default Form