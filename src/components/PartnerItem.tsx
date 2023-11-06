import { FC } from "react"
interface IPartnerItemProps {
   text: string
   logo: string
}
const PartnerItem: FC<IPartnerItemProps> = ({text, logo}) => {
  return (
    <div className="partnerItem">
      <div className="partnerItem__logo">
         <img src={require('../images/logo.png')} alt="alt"/>
         <img src={require('../images/logo2.png')} alt="alt"/>
      </div>
      <div className="partnerItem__text">
         {text}
      </div>
    </div>
  )
}

export default PartnerItem