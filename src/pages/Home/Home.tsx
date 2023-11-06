import IButton from '../../UI/buttons/IButton'
import './Home.scss'

const Home = () => {
  return (
    <div className="container">
      <div className="home">
        <div className="home__title title">
          <h1>РАЗРАБОТКА</h1>
          <h4 className="title__lineRight">Веб-сайтов</h4>
          <h2>АВТОМАТИЗАЦИЯ</h2>
          <h4 className="title__lineLeft">Бизнес-процессов</h4>
          {/* <button className="title__button">ДЕЛАЕМ!</button> */}
          <IButton content={'ДЕЛАЕМ!'}/>
        </div>
      </div>
    </div>
  )
}

export default Home