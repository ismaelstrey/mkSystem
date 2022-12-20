import { AiOutlineHome, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { FaServicestack } from 'react-icons/fa';
import { IoIosContacts } from 'react-icons/io';
const classCss = 'flex flex-row items-baseline align-baseline justify-center p-4 m-4';
const classCssIcon = 'm-2 hover:text-yellow-400';
const Header = () => {
    return (
        <header className="w-screen h-12 bg-black">
            <ul className='flex flex-row items-center justify-center content-center justify-items-center h-full '>
                <li className=' hover:text-yellow-400'>
                    <span></span>
                    <a className={classCss} href="#"><AiOutlineHome fill='white' height="h-24" className={classCssIcon} />Home</a>
                </li>
                <li className=' hover:text-yellow-400'>
                    <span></span>
                    <a className={classCss} href="#"><FaServicestack fill='white' height="h-24" className={classCssIcon} />Serviços</a>
                </li>
                <li className=' hover:text-yellow-400'>
                    <span></span>
                    <a className={classCss} href="#"><AiOutlineFundProjectionScreen fill='white' height="h-24" className={classCssIcon} />Produtos</a>
                </li>
                <li className=' hover:text-yellow-400'>
                    <span></span>
                    <a className={classCss} href="#"><IoIosContacts fill='white' height="h-24" className={classCssIcon} />Contato</a>
                </li>


            </ul>
        </header>
    )
}

export default Header