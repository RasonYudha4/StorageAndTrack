import AddButton from '@/Components/AddButton';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Plus from '../../../public/images/plus.png';
import Folder from '../../../public/images/folder.png';
import Dots from '../../../public/images/dots.png';

interface NoteProps {
    title: string,
    content: string,
    writtenDate: string
}
export default function Note({ title, content, writtenDate }: NoteProps) {
    return (
        <AuthenticatedLayout>
            <Head title="Tasks" />

            <div className=' relative bg-[#540d87] bg-opacity-70 rounded-xl text-white mx-auto mt-8 max-w-[85rem] min-h-[40rem] px-4 py-8 sm:px-6 lg:px-8'>
                <div className=' grid grid-cols-[max-content_1fr] gap-5 my-auto bg-transparent h-[36rem] w-full'>

                    <div className=' border-r-4 border-[#a449d1] p-4 flex flex-col row-span-8'>
                        <div className=' bg-[#a449d1] w-28 h-14 rounded-lg my-4 flex hover:bg-opacity-40 hover:cursor-pointer'>
                            <img src={Plus} alt="" className=' h-6 w-6 my-auto ml-4' />
                            <div className=' my-auto ml-4 font-semibold'>New</div>
                        </div>
                        <div className=' bg-[#a449d1] w-40 h-10 rounded-lg mt-4 flex hover:bg-opacity-40 focus:bg-opacity-40'>
                            <img src={Folder} alt="" className=' h-4 w-4 my-auto ml-3' />
                            <p className=' text-[#540d87] my-auto font-bold ml-3 text-sm'>Folder 1</p>
                        </div>
                        <div className=' bg-[#a449d1] w-40 h-10 rounded-lg mt-4 flex hover:bg-opacity-40 focus:bg-opacity-40'>
                            <img src={Folder} alt="" className=' h-4 w-4 my-auto ml-3' />
                            <p className=' text-[#540d87] my-auto font-bold ml-3 text-sm'>Folder 2</p>
                        </div>
                        <div className=' bg-[#a449d1] w-40 h-10 rounded-lg mt-4 flex hover:bg-opacity-40 focus:bg-opacity-40'>
                            <img src={Folder} alt="" className=' h-4 w-4 my-auto ml-3' />
                            <p className=' text-[#540d87] my-auto font-bold ml-3 text-sm'>Folder 3</p>
                        </div>
                    </div>
                    <div className=' flex flex-wrap w-full p-4'>
                        <div className=' bg-[#a449d1] w-48 mr-4 h-10 rounded-lg flex hover:bg-opacity-40 focus:bg-opacity-40'>
                            <img src={Folder} alt="" className=' h-4 w-4 my-auto ml-3' />
                            <p className=' text-[#540d87] my-auto font-bold ml-3 text-sm'>Folder 3</p>
                            <div className=' my-auto w-5 h-5 ml-16 hover:cursor-pointer'>
                                <img src={Dots} alt=""/>
                            </div>
                        </div>
                    </div>

                </div>
                <AddButton className='absolute bottom-10 right-10 h-20 w-20 rounded-full'><img src={Plus} alt="" /></AddButton>
            </div>
        </AuthenticatedLayout>
    );
}