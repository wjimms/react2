import lupa from './images/Group8.svg';
import tochka from './images/Frame1.svg'


export const Header = () => {
    return(
        <ul className="header">
            <img src={lupa} className='lupa'/>
            <img src={tochka} className='tochka'/>
            <li>Компания</li>
            <li>Каталог</li>
            <li>Услуги</li>
            <li>Проекты</li>
            <li>Курсы</li>
            <li>Информация</li>
            <li>Кoнтакты</li>
            
        </ul>
    )
}