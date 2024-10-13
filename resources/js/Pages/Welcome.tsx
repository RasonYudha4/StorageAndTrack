import GoogleButton from '@/Components/GoogleButton';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import folder from '../../../public/images/folder.png';
import folderBright from '../../../public/images/folderBright.png';
import plan from '../../../public/images/plan.png';
import planBright from '../../../public/images/planBright.png';
import tasks from '../../../public/images/tasks.png';
import tasksBright from '../../../public/images/tasksBright.png';


export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <body className=' p-0 m-0'>
                <div className=' min-h-screen bg-gradient-to-b from-[#0d0022] from-35% via-[#540d87] via-75% to-[#a449d1]'>
                    <div className='relative h-screen font-sans'>
                        <h2 className=' text-6xl md:text-6xl lg:text-8xl font-extrabold absolute top-[22.5%] md:top-[27.5%] lg:top-[30%] left-[13%] md:left-[20%] lg:left-[22.5%] bg-clip-text text-transparent bg-gradient-to-br from-[#b02ab4] from-20% via-[#a02bb6] via-45% to-[#a449d1] to-70%'>Routine Planner</h2>
                        <p className=' w-64 md:w-[30rem] lg:w-[40rem] text-sm md:text-lg lg:text-2xl text-center font-semibold absolute top-[42.5%] md:top-[37.5%] lg:top-[44%] left-9 md:left-[22.5%] lg:left-[27.5%] bg-clip-text text-transparent bg-gradient-to-br from-[#b02ab4] from-20% via-[#a02bb6] via-45% to-[#a449d1] to-70%'>Track your daily activities, Store your achievements and moments, And Manage your progress here for free</p>
                        <Link
                            href={route('login')}
                            // className='animate-bounce inline-flex relative top-[65%] text-md font-medium bg-indigo-900 mt-3 px-4 py-2 rounded-lg tracking-wide text-white'
                            className=" animate-bounce text-4xl p-8 font-semibold absolute top-[65%] md:left-[40%] lg:left-[43.5%] text-[#a449d1] hover:text-white"
                        >
                            Sign In
                        </Link>
                        <GoogleButton />
                    </div>
                </div>
                <div className=' h-[42rem] bg-[#a449d1] grid grid-cols-5 grid-rows-4 gap-5'>
                    <div className=' col-start-2 col-span-3 relative'>
                        <h4 className=' absolute top-[10%] left-[20%] text-7xl font-extrabold text-[#540d87]'>Choose Service</h4>
                        <p className=' absolute top-[60%] left-[17%] text-xl font-bold text-[#540d87]'>You may enjoy the available services that we provide for you!</p>
                    </div>
                    <Link
                        href={route('login')}
                        className=' group col-start-2 row-span-2 bg-[#540d87] bg-opacity-25 rounded-xl hover:bg-opacity-50 grid grid-rows-3'>
                        <div className=' relative'>
                            <img src={folder} alt="" className=' absolute w-8 h-8 md:w-16 md:h-16 top-[25%] md:top-[25%] md:left-[37.5%] opacity-100 group-hover:opacity-0' />
                            <img src={folderBright} alt="" className=' absolute w-16 h-16 top-[25%] left-[37.5%] opacity-0 group-hover:opacity-100' />
                        </div>
                        <div className=' row-span-2 text-center text-[#540d87] group-hover:text-[#C690EF]'>
                            <h5 className=' mt-2 mb-2 text-3xl font-extrabold'>Store</h5>
                            <div className=' w-full px-8 m-auto text-sm md:text-md lg:font-bold'>Store any of your resources, note, text, and any other of your ideas here</div>
                        </div>
                    </Link>
                    <Link
                        href={route('login')}
                        className=' group col-start-3 row-span-2 bg-[#540d87] bg-opacity-25 rounded-xl hover:bg-opacity-50 grid grid-rows-3'>
                        <div className=' relative'>
                            <img src={plan} alt="" className=' absolute w-8 h-8 md:w-16 md:h-16 top-[25%] md:top-[25%] md:left-[37.5%] opacity-100 group-hover:opacity-0' />
                            <img src={planBright} alt="" className=' absolute w-16 h-16 top-[25%] left-[37.5%] opacity-0 group-hover:opacity-100' />
                        </div>
                        <div className=' row-span-2 text-center text-[#540d87] group-hover:text-[#C690EF]'>
                            <h5 className=' mt-2 mb-2 text-3xl font-extrabold'>Plan</h5>
                            <div className=' w-full px-8 m-auto text-sm md:text-md lg:font-bold'>List all of your today's plan and track your progresses to help improve your quality and meaningful day</div>
                        </div>
                    </Link>
                    <Link
                        href={route('login')}
                        className=' group col-start-4 row-span-2 bg-[#540d87] bg-opacity-25 rounded-xl hover:bg-opacity-50 grid grid-rows-3'>
                        <div className=' relative'>
                            <img src={tasks} alt="" className=' absolute w-8 h-8 md:w-16 md:h-16 top-[25%] md:top-[25%] md:left-[37.5%] opacity-100 group-hover:opacity-0' />
                            <img src={tasksBright} alt="" className=' absolute w-16 h-16 top-[25%] left-[37.5%] opacity-0 group-hover:opacity-100' />
                        </div>
                        <div className=' row-span-2 text-center text-[#540d87] group-hover:text-[#C690EF]'>
                            <h5 className=' mt-2 mb-2 text-3xl font-extrabold'>Tasks</h5>
                            <div className=' w-full px-8 m-auto text-sm md:text-md lg:font-bold'>Write up all tasks that you have. List all of it in order sequance so that you be more aware of your responsibilities </div>
                        </div>
                    </Link>
                </div>
            </body>
        </>
    );
}
