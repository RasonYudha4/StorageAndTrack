import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AddButton from '@/Components/AddButton';
import { Head } from '@inertiajs/react';
import Plus from '../../../public/images/plus.png';
import Check from '../../../public/images/check.png';
import CheckButton from '@/Components/CheckButton';

export default function Plan() {
    return (
        <AuthenticatedLayout>
            <Head title="Tasks" />

            <div className=' relative bg-[#540d87] rounded-xl opacity-70 mx-auto mt-8 max-w-[85rem] min-h-[40rem] px-4 py-8 sm:px-6 lg:px-8'>
            <div className=' my-auto bg-transparent h-[36rem] overflow-y-auto'>
                <div className=' bg-[#a449d1] w-full h-12 rounded-3xl mb-8 '></div>
                <div className=' bg-[#a449d1] w-full h-12 rounded-3xl mb-8 '></div>
                <div className=' bg-[#a449d1] w-full h-12 rounded-3xl mb-8 '></div>
                <div className=' bg-[#a449d1] w-full h-12 rounded-3xl mb-8 '></div>
                <div className=' bg-[#a449d1] w-full h-12 rounded-3xl mb-8 '></div>
                <div className=' bg-[#a449d1] w-full h-12 rounded-3xl mb-8 '></div>
                <div className=' bg-[#a449d1] w-full h-12 rounded-3xl mb-8 '></div>
                <div className=' bg-[#a449d1] w-full h-12 rounded-3xl mb-8 '></div>
                <div className=' bg-[#a449d1] w-full h-12 rounded-3xl mb-8 '></div>
                <AddButton className='absolute bottom-10 right-10 h-20 w-20 rounded-full'><img src={Plus} alt="" /></AddButton>
                <CheckButton className='absolute bottom-10 right-40 h-20 w-20 rounded-full'><img src={Check} alt="" /></CheckButton>
            </div>
            </div>
        </AuthenticatedLayout>
    );
}