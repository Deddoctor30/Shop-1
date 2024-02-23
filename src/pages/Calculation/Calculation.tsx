import { useState, useRef, FC } from 'react';
import { Link } from "react-router-dom";
import './Calculation.scss'

//Caruosel
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { calculationType } from '../../types/calculationType';

interface CalculationProps {
  calc: (value: calculationType) => void
}

const Calculation: FC<CalculationProps> = ({calc}) => {
  const swiperRef = useRef<any>();
  const [currentSlide, setCurrentSlide] = useState(1)
  const [pages, setPages] = useState('0'); 
  const [func, setFunc] = useState<boolean[]>([false, false, false, false, false]);
  const [customers, setCustomers] = useState('0');

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }
  const sliderHandler = () => {
    swiperRef?.current?.slideNext()
    setCurrentSlide(prev => prev + 1)

    if (currentSlide === 3) {
      calc(    {
        pages: pages,
        functions: func,
        customers
     })
    }
  }

  const checkboxHandler = (position: number) => {
    const updatedCheckedState = func.map((item, index) =>
      index === position ? !item : item
    );
    setFunc(updatedCheckedState)
    
  }

  return (
    <div className='calculation'>
      <div className="container">
        <div className='calculation__content'>
          <h2 className='calculation__title'>РАСЧЕТ</h2>
          <div className="calculation__wrapper">
            <Swiper
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper: any) => swiperRef.current = swiper}
              allowTouchMove={false}
            >
              <SwiperSlide className='calculation__swiper'>
                <div className="calculation__inner">
                  <div className="calculation__selector selector">
                    <h4 className='selector__subtitle'>Примерное колличество страниц</h4>
                    <form className='selector__form' id='pageForm' action="GET" onSubmit={handlerSubmit}>
                      <div className="selector__item">
                        <input type="radio" name="page" id="firstPage" value={3} defaultChecked onChange={(e) =>setPages(e.target.value)}/>
                        <label className='selector__labelRound' htmlFor="firstPage">1-3</label>
                      </div>
                      <div className="selector__item">
                        <input type="radio" name="page" id="secondPage" value={6} onChange={(e) =>setPages(e.target.value)}/>
                        <label className='selector__labelRound' htmlFor="secondPage">3-6</label>
                      </div>
                      <div className="selector__item">
                        <input type="radio" name="page" id="thirdPage" value={10} onChange={(e) =>setPages(e.target.value)}/>
                        <label className='selector__labelRound' htmlFor="thirdPage">6-10</label>
                      </div>
                      <div className="selector__item">
                        <input type="radio" name="page" id="fourPage" value={12} onChange={(e) =>setPages(e.target.value)}/>
                        <label className='selector__labelRound' htmlFor="fourPage">12+</label>
                      </div>
                    </form>
                  </div>
                  <div className="calculation__action action">
                    <h4 className="action__title">Вопрос 1 из 3</h4>
                    <h4 className="action__subtitle">РАЗРАБОТКА</h4>
                    <div className="action__text">Пожалуйста, выберите подходящий функционал для вашего сайта.
                        <br />
                        При наведение на вариант вы получите краткое описание функции.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="calculation__inner">
                  <div className="calculation__selector selector">
                    <h4 className='selector__subtitle'>Выберите основные функции</h4>
                    <form className='selector__form' id='funcForm' action="GET" onSubmit={handlerSubmit}>
                      <div className="selector__item">
                        <input type="checkbox" name="page" id="firstFunc" value={'design'} onChange={() =>checkboxHandler(0)}/>
                        <label className='selector__labelSquare' htmlFor="firstFunc">Дизайн проект</label>
                      </div>
                      <div className="selector__item">
                        <input type="checkbox" name="page" id="secondFunc" value={'layout'} onChange={() =>checkboxHandler(1)}/>
                        <label className='selector__labelSquare' htmlFor="secondFunc">Вёрстка</label>
                      </div>
                      <div className="selector__item">
                        <input type="checkbox" name="page" id="thirdFunc" value={'crm'} onChange={() =>checkboxHandler(2)}/>
                        <label className='selector__labelSquare' htmlFor="thirdFunc">Подключение к CRM</label>
                      </div>
                      <div className="selector__item">
                        <input type="checkbox" name="page" id="fourFunc" value={'onlinePayment'} onChange={() =>checkboxHandler(3)}/>
                        <label className='selector__labelSquare' htmlFor="fourFunc">Наличие онлайн оплаты</label>
                      </div>
                      <div className="selector__item">
                        <input type="checkbox" name="page" id="fifthFunc" value={'apps'} onChange={() =>checkboxHandler(4)}/>
                        <label className='selector__labelSquare' htmlFor="fifthFunc">Наличие приложения</label>
                      </div>
                    </form>
                  </div>
                  <div className="calculation__action action">
                    <h4 className="action__title">Вопрос 2 из 3</h4>
                    <h4 className="action__subtitle">РАЗРАБОТКА</h4>
                    <div className="action__text">Пожалуйста, выберите подходящий функционал для вашего сайта.
                        <br />
                        При наведение на вариант вы получите краткое описание функции.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="calculation__inner">
                  <div className="calculation__selector selector">
                    <h4 className='selector__subtitle'>Выберите предположительное кол-во поситителей в месяц</h4>
                    <form className='selector__form' id='customersForm' action="GET" onSubmit={handlerSubmit}>
                      <div className="selector__item">
                        <input type="radio" name="page" id="firstVisit" value={100} defaultChecked onChange={(e) =>setCustomers(e.target.value)}/>
                        <label className='selector__labelRound' htmlFor="firstVisit">50-100</label>
                      </div>
                      <div className="selector__item">
                        <input type="radio" name="page" id="secondVisit" value={10000} onChange={(e) =>setCustomers(e.target.value)}/>
                        <label className='selector__labelRound' htmlFor="secondVisit">100-10.000</label>
                      </div>
                      <div className="selector__item">
                        <input type="radio" name="page" id="thirdVisit" value={300000} onChange={(e) =>setCustomers(e.target.value)}/>
                        <label className='selector__labelRound' htmlFor="thirdVisit">10.000-300.000</label>
                      </div>
                      <div className="selector__item">
                        <input type="radio" name="page" id="fourVisit" value={1000000} onChange={(e) =>setCustomers(e.target.value)}/>
                        <label className='selector__labelRound' htmlFor="fourVisit">300.000-1.000.000</label>
                      </div>
                    </form>
                  </div>
                  <div className="calculation__action action">
                    <h4 className="action__title">Вопрос 3 из 3</h4>
                    <h4 className="action__subtitle">РАЗРАБОТКА</h4>
                    <div className="action__text">Пожалуйста, выберите подходящий функционал для вашего сайта.
                        <br />
                        При наведение на вариант вы получите краткое описание функции.
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {
            currentSlide < 3
            ?
            <button className='calculation__btn' onClick={() => sliderHandler()}>Дальше</button>
            :
            <Link to="/price"><button className='calculation__btn' onClick={() => sliderHandler()}>Рссчитать</button></Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Calculation