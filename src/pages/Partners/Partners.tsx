import PartnerItem from '../../components/PartnerItem'
import './Partners.scss';


const Partners = () => {
  return (
      <div className='partners'>
        <div className="container">
          <div className="partners__wrapper">
            <section className="partners__clients">
              <h2 className="partners__title">НАШИ РАБОТЫ</h2>
              <div className="partners__content">
                <PartnerItem logo={''} text='Lorem ipsum dolor sit amet consectetur. Elementum malesuada amet mattis aenean sollicitudin habitasse tortor ut nulla. Commodo massa vitae lectus dictum id pretium pulvinar nullam nunc. Sapien tincidunt malesuada eu a eu...'/>
                <PartnerItem logo={''} text='Lorem ipsum dolor sit amet consectetur. Elementum malesuada amet mattis aenean sollicitudin habitasse tortor ut nulla. Commodo massa vitae lectus dictum id pretium pulvinar nullam nunc. Sapien tincidunt malesuada eu a eu...'/>
                <PartnerItem logo={''} text='Lorem ipsum dolor sit amet consectetur. Elementum malesuada amet mattis aenean sollicitudin habitasse tortor ut nulla. Commodo massa vitae lectus dictum id pretium pulvinar nullam nunc. Sapien tincidunt malesuada eu a eu...'/>
                <PartnerItem logo={''} text='Lorem ipsum dolor sit amet consectetur. Elementum malesuada amet mattis aenean sollicitudin habitasse tortor ut nulla. Commodo massa vitae lectus dictum id pretium pulvinar nullam nunc. Sapien tincidunt malesuada eu a eu...'/>
                <PartnerItem logo={''} text='Lorem ipsum dolor sit amet consectetur. Elementum malesuada amet mattis aenean sollicitudin habitasse tortor ut nulla. Commodo massa vitae lectus dictum id pretium pulvinar nullam nunc. Sapien tincidunt malesuada eu a eu...'/>
                <PartnerItem logo={''} text='Lorem ipsum dolor sit amet consectetur. Elementum malesuada amet mattis aenean sollicitudin habitasse tortor ut nulla. Commodo massa vitae lectus dictum id pretium pulvinar nullam nunc. Sapien tincidunt malesuada eu a eu...'/>
                <PartnerItem logo={''} text='Lorem ipsum dolor sit amet consectetur. Elementum malesuada amet mattis aenean sollicitudin habitasse tortor ut nulla. Commodo massa vitae lectus dictum id pretium pulvinar nullam nunc. Sapien tincidunt malesuada eu a eu...'/>
                <PartnerItem logo={''} text='Lorem ipsum dolor sit amet consectetur. Elementum malesuada amet mattis aenean sollicitudin habitasse tortor ut nulla. Commodo massa vitae lectus dictum id pretium pulvinar nullam nunc. Sapien tincidunt malesuada eu a eu...'/>
              </div>
            </section>
            <section className="partners__work">
              <h2>Давайте начнём работу!</h2>
              
            </section>
          </div>
        </div>
      </div>
  )
}

export default Partners