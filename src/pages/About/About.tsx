import Form from "../../components/Form/Form"
import './About.scss';

const About = () => {
  return (
   <div className='about'>
   <div className="container">
     <div className='about__content'>
       <h2 className='about__title'>A-WEB это</h2>
       <p className='about__subtitle'>ВЕБ-студия, фокус которой направлен на высокотехнологичные и современные решения</p>
       <div className="about__wrapper">
         <div className="about__purpose purpose">
            <div className="purpose__target target">
               <h5 className="target__title">Цель</h5>
               <p className="target__text">Повышение доступности услуг на 20% до 2024 года 
Увелечение зароботной платы сотрудников на 10% до 2024 года</p>
            </div>
            <div className="purpose__tasks tasks">
               <h5 className="tasks__title">Задачи</h5>
               <p className="tasks__text">Дать возможность пользоваться преимуществами тех информационных систем над 
развитием которых мы работаем</p>
            </div>
            <div className="purpose__mission mission">
               <h5 className="mission__title">Миссия</h5>
               <p className="mission__text">Дать возможность пользоваться преимуществами тех информационных систем над 
развитием которых мы работаем</p>
            </div>
         </div>
         <div className="about__results results">
            <div className="results__title">Наши результаты</div>
            <div className="results__present">
               <div className="results__item">
                  <div className="results__main">24</div>
                  <div className="results__text">Lorem ipsum dolor sit amet consectetur.</div>
               </div>
               <div className="results__item">
                  <div className="results__main">24</div>
                  <div className="results__text">Lorem ipsum dolor sit amet consectetur.</div>
               </div>
               <div className="results__item">
                  <div className="results__main">24</div>
                  <div className="results__text">Lorem ipsum dolor sit amet consectetur.</div>
               </div>
               <div className="results__item">
                  <div className="results__main">24</div>
                  <div className="results__text">Lorem ipsum dolor sit amet consectetur.</div>
               </div>
            </div>
         </div>
         <Form/>
       </div>
     </div>
   </div>
 </div>
  )
}

export default About