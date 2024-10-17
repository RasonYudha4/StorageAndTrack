import AddButton from '@/Components/AddButton';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Plus from '../../../public/images/plus.png';
import Trash from '../../../public/images/trash.png';
import Left from '../../../public/images/angle-left.png';
import Right from '../../../public/images/angle-right.png';

interface NoteProps {
    title: string,
    content: string,
    writtenDate: string
}

export default function Note({title, content, writtenDate}: NoteProps) {
    return (
        <AuthenticatedLayout>
            <Head title="Note" />

            <div className=' relative bg-[#540d87] rounded-xl opacity-70 mx-auto mt-8 max-w-[85rem] min-h-[40rem] px-4 py-8 sm:px-6 lg:px-8'>
            <div className=' my-auto bg-transparent h-[36rem] w-full'>
                    <div className=' flex justify-between '>
                        <div className=' flex'>    
                            <div className=' pr-4'>
                               <p className=' font-extrabold text-3xl py-2'>{title}</p>
                               <p className=' font-semibold text-lg '>{writtenDate}</p>
                            </div>
                            <div className=' flex'>
                                <div className=' bg-[#a449d1] rounded-full h-12 w-12 mt-5 ml-6 hover:bg-[#540d87]'><img src={Left} alt="" className=' h-6 w-6 m-3 '/></div>
                                <div className=' bg-[#a449d1] rounded-full h-12 w-12 mt-5 ml-6 hover:bg-[#540d87]'><img src={Right} alt="" className=' h-6 w-6 m-3 '/></div>
                            </div>
                        </div>
                        <div className=' h-10 w-10 m-5 hover:opacity-80'>
                            <img src={Trash} alt=""/>
                        </div>
                    </div>
                    <div className=' border-b-4 border-[#540d87] p-2 '></div>
                    <div className=' py-6'>
                        {content}
                    </div>
                <AddButton className='absolute bottom-10 right-10 h-20 w-20 rounded-full'><img src={Plus} alt="" /></AddButton>
            </div>
            </div>
        </AuthenticatedLayout>
    );
}