import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons';

const footer = (props) => {
    return (<>
     <div className='flex flex-col w-full min-h-[300px] p-5 items-center text-customTextColor bg-[#272727]'>

    <div className='px-5 border rounded-lg text-sm'> <a href="#navLinks"> Go to Top</a></div>
    <div className='text-sm min-h-full flex flex-col flex-1 items-center w-full '>
     <div className=' flex-1 flex flex-col  justify-center ' >
     <div className="important_links font-bold py-2">
      Resource Links
     </div>
    <div className='text-sm '>
    Backgrouds pattern <a href="http://bgjar.com" target='_blank' className=' text-gray-400'> BGjar.com</a>  
  </div> 
  <div className='text-sm '>
    Free UI generator <a href="http://clone-ui.com" target='_blank' className='text-gray-400 '>Clone-ui.com</a>  
  </div> 
  </div>

    <div className='mt-auto flex gap-1 items-center'>
    <FontAwesomeIcon icon={faCopyright} className='' size='sm' />
    Copyright Reserved 2024
    </div>
</div>


    </div>
    </>)
};
export default footer;