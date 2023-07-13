import React from 'react'
import See from '../assets/See'

const Schedule = () => {
  return (
    <div className='mt-4  md:w-1/2 h-full text-black'>
        <div className=' p-4 bg-white rounded-[20px]'>
            <div className='flex items-center justify-between w-full h-full pb-2'>
                <h6 className='text-[18px] font-bold  ' >Today's Schedule</h6>
                <div className='text-[12px] flex gap-x-1 '>
                    See all
                    <See />
                </div>
                
            </div>
            <div className='flex mt-3 mb-10'>
                <div className='items-stretch bg-[#9BDD7C] min-h-fit w-[5px] mr-4 '></div>
                <div className='w-2/3'>
                    <p className="font-bold text-sm text-[#666]"> Meeting with suppliers from Kuta Bali</p>
                    <p className='text-xs text-[#999]'> 14.00-15.00</p>
                    <p className='text-xs text-[#999]'> at Sunset Road, Kuta, Bali</p>
                </div>

                
            </div>
            <div className='flex mb-10'>
                <div className='items-stretch bg-[#6972C3] min-h-fit w-[5px] mr-4 '> </div>
                <div >
                    <p className="font-bold text-sm text-[#666]"> Check operation at Giga Factory 1</p>
                    <p className='text-xs text-[#999]'> 18.00-20.00</p>
                    <p className='text-xs text-[#999]'> at Central Jakarta</p>
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Schedule