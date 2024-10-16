import AddButton from '@/Components/AddButton';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Plus from '../../../public/images/plus.png';

interface NoteProps {
    title: string,
    content: string,
    writtenDate: string
}

export default function Note({title}: NoteProps) {
    return (
        <AuthenticatedLayout>
            <Head title="Note" />

            <div className=' relative bg-[#540d87] rounded-xl opacity-70 mx-auto mt-8 max-w-[85rem] min-h-[40rem] px-4 py-8 sm:px-6 lg:px-8'>
                <div className=' my-auto bg-transparent h-[36rem] w-full'>
                    <p>{title}</p>
                </div>
                <AddButton className='absolute bottom-10 right-10 h-20 w-20 rounded-full'><img src={Plus} alt="" /></AddButton>
            </div>
        </AuthenticatedLayout>
    );
}