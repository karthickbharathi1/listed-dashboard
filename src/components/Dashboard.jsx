import React from 'react'
import Dashboardicon from '../assets/Dashboardicon'
import Transactionicon from '../assets/Transactionicon'
import Scheduleicon from '../assets/Scheduleicon'
import Usericon from '../assets/Usericon'
import Settingicon from '../assets/Settingicon'
import Searchicon from '../assets/Searchicon'
import Vector from '../assets/Vector'
import Logo from "../assets/image 1.png"
import Users from '../assets/Users'
import Likes from '../assets/Likes'
import Totaltransactionsicon from '../assets/Totaltransactionsicon'
import Revenues from '../assets/Revenues'
import LineChart from './LineChart'
import Piegraph from './Piegraph'
import Schedule from './Schedule'
const Dashboard = () => {
  return (
    <>
        <div className='min-h-screen flex text-white min-w-fit md:p-5 my-4   px-4 bg-[#F5F5F5]'>
            <div className='md:block md:basis-1/5 bg-black min-h-full min-w-[12rem]  rounded-[30px]  hidden'>
                <div className='w-[70%] mx-auto flex flex-col justify-evenly min-h-full'>
                    <div>
                        <h1 className='font-bold  my-auto text-base md:text-2xl text-primary'>Board.</h1>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex md:gap-x-5 gap-x-2 text-white text-xs md:text-[1.125rem]   mb-10  cursor-pointer min-w-fit'>
                            <Dashboardicon />
                            <p className='font-bold'>Dashboard</p>
                        </div>
                        <div className='flex md:gap-x-5 gap-x-2 text-white text-xs md:text-[1.125rem]   mb-10  cursor-pointer min-w-fit'>
                            <Transactionicon />
                            <p className='font-bold'>Transactions</p>
                        </div>
                        <div className='flex md:gap-x-5 gap-x-2 text-white text-xs md:text-[1.125rem]   mb-10  cursor-pointer min-w-fit'>
                            <Scheduleicon />
                            <p className='font-bold'>Schedules</p>
                        </div>
                        <div className='flex md:gap-x-5 gap-x-2 text-white text-xs md:text-[1.125rem]   mb-10  cursor-pointer min-w-fit'>
                            <Usericon />
                            <p className='font-bold'>Users</p>
                        </div>
                        <div className='flex md:gap-x-5 gap-x-2 text-white text-xs md:text-[1.125rem]   mb-10  cursor-pointer min-w-fit'>
                            <Settingicon />
                            <p className='font-bold'>Settings</p>
                        </div>
                    </div>
                    <div className='text-[0.875rem]'>
                        <button>Help</button>
                        <br />
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
            <div className='md:basis-4/5 px-2 xl:px-14 w-11/12 null'>
                <div className='flex justify-between  items-center'>
                    <h2 className='text-2xl   font-bold text-black max-sm:ml-8'>Dashboard</h2>
                    <div className='flex gap-x-7  items-center'>
                        <div className='relative md:block hidden'>
                            <input type="text" placeholder='Search..' className='text-[14px] text-secondary  p-1 px-4 rounded-[10px] outline-none' />
                            <Searchicon />
                        </div>
                        <Vector />
                        <img src={Logo} alt="icon" className='rounded-full w-[50px] h-[50px]' />
                    </div>
                </div>
                <div className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 my-2 mb-8  text-black flex-col gap-y-8 '>
                    <div className='bg-[#DDEFE0] relative p-4 pt-12 pr-20 rounded-[10px]  md:w-[15rem] md:mx-auto' >
                        <Revenues />
                        <p className='text-sm mb-1'>Total Revenues</p>
                        <p className='text-2xl font-bold'>$2,129,430</p>
                    </div>
                    <div className='bg-[#F4ECDD]  relative p-4 pt-12 pr-20 rounded-[10px]  md:w-[15rem] md:mx-auto' >
                        <Totaltransactionsicon />
                        <p className='text-sm mb-1'>Total Transactions</p>
                        <p className='text-2xl font-bold'>1,520</p>
                    </div>
                    <div className='bg-[#EFDADA] relative p-4 pt-12 pr-20 rounded-[10px]  md:w-[15rem] md:mx-auto' >
                        <Likes />
                        <p className='text-sm mb-1'>Total Likes</p>
                        <p className='text-2xl font-bold'>9,721</p>
                    </div>
                    <div className='bg-[#DEE0EF] relative p-4 pt-12 pr-20 rounded-[10px]  md:w-[15rem] md:mx-auto' >
                        <Users />
                        <p className='text-sm mb-1'>Total Users</p>
                        <p className='text-2xl font-bold'>892</p>
                    </div>
                    
                </div>
                {/* <div className='w-full bg-white p-4 pt-12 relative rounded-2xl'> */}
                    {/* <div className='absolute top-5 text-black z-20 flex flex-row  md:flex-col'>
                        <h6 className='text-[18px] font-bold'>
                            Activities
                        </h6>
                        <select name="date" >
                            <option value="0"> May - June 2021</option>
                            <option value="1"> June - July 2021</option>
                            <option value="2"> August - September 2021</option>
                            <option value="3">September-October 2021</option>
                            

                        </select>
                        



                    </div> */}
                   
                    <LineChart />
                    <div className='lg:flex gap-x-8'>
                    <Piegraph />
                    <Schedule />

                    </div>
                    
                   
                {/* </div> */}

            </div>
        </div>
    </>
    
  )
}

export default Dashboard