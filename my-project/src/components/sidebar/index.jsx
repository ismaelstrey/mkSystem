import { FcDataConfiguration } from 'react-icons/fc'
import { FcAddDatabase, FcSearch } from 'react-icons/fc'
import { CiEdit } from 'react-icons/ci'
import { AiFillDelete } from 'react-icons/ai'
import { RxEyeClosed } from 'react-icons/rx'

const Sidebar = ({ active = false }) => {
    var ShowSidebar = ''
    active === false ? ShowSidebar = "'flex bg-slate-900 w-1/12 h-full'" : ShowSidebar = "hidden"
    return (
        <aside className={ShowSidebar}>
            <ul className='flex flex-col content-center space-y-10 '>
                <span className='flex flex-col content-center'>
                    <li className='flex h-8 p-4 m-8'><a href="#"><FcSearch size="5rem" /></a></li>
                    <li className='flex h-8 p-4 m-8'><a href="#"><FcDataConfiguration size="5rem" /></a></li>
                    <li className='flex h-8 p-4 m-8'><a href="#"><CiEdit size="5rem" /></a></li>
                    <li className='flex h-8 p-4 m-8'><a href="#"><AiFillDelete size="5rem" /></a></li>
                </span>

                <span className='flex flex-col content-center'>
                    <li className='flex h-8 p-4 m-8'><a href="#"><FcAddDatabase size="5rem" /></a></li>
                    <li className='flex h-8 p-4 m-8'><a href="#"><FcDataConfiguration size="5rem" /></a></li>
                    <li className='flex h-8 p-4 m-8'><a href="#"><CiEdit size="5rem" /></a></li>
                    <li className='flex h-8 p-4 m-8'><a href="#"><RxEyeClosed size="5rem" /></a></li>
                </span>
            </ul>
        </aside>
    )
}


export default Sidebar