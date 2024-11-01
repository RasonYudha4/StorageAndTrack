import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AddButton from '@/Components/AddButton';
import { Head, useForm, usePage, router } from '@inertiajs/react';
import Plus from '../../../public/images/plus.png';
import Check from '../../../public/images/check.png';
import CheckButton from '@/Components/CheckButton';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useState } from 'react';

// Define the types for form data and errors
interface FormData {
    title: string;
}

interface FormErrors {
    title?: string;
}

interface Plans {
    title: string;
    created_at? : string
}

interface PageProps {
    plans: Plans[];
}

export default function Plan({ plans }: PageProps) {
    const { data, setData, errors, post } = useForm<FormData>({
        title: ""
    });

    // Handle form submission
    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("plan.store"));
    }

    function handleDeque() {
        router.delete(route("plan.delete"));
    }


    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <AuthenticatedLayout>
            <Head title="Plans" />

            <div className=' relative bg-[#540d87] rounded-xl opacity-70 mx-auto mt-8 max-w-[85rem] min-h-[40rem] px-4 py-8 sm:px-6 lg:px-8'>
                <div className=' my-auto bg-transparent h-[36rem] overflow-y-auto'>
                {plans.length > 0 ? (
                                plans.map(({title }) => (
                    <div className='bg-[#a449d1] w-full h-12 rounded-3xl mb-8 flex items-center'>
                        <p className='text-white ml-8'>{title}</p>
                    </div>
                     ))
                    ) : (
                        <tr>
                            <td
                                className="px-4 py-2 border-b border-[#a449d1] text-white"

                            >
                                No Plan found
                            </td>
                        </tr>
                    )}
                    <Modal show={isModalOpen} onClose={closeModal}>
                        <form onSubmit={handleSubmit}>
                            <div className=' w-[64rem] h-72 bg-[#540d87] relative'>
                                <p className=' absolute text-5xl font-medium text-white right-[57%] top-8'>Add Plan</p>
                                <div className=' absolute top-[6rem] right-[45%] w-[28rem] mt-4'>
                                    <InputLabel className=' text-white' htmlFor="planTitle" value="Plan Title" />

                                    <TextInput
                                        id="planTitle"
                                        type="text"
                                        name="planTitle"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autoComplete="planTitle"
                                        isFocused={true}
                                        onChange={(e) => setData("title", e.target.value)}
                                    />
                                    {errors.title && (
                                        <span className="text-red-600 text-sm">
                                            {errors.title}
                                        </span>
                                    )}
                                </div>
                                <PrimaryButton type="submit" className=' absolute bg-black top-[14rem] right-[62.5%] hover:bg-slate-600'>Submit</PrimaryButton>
                            </div>
                        </form>
                    </Modal>
                    <AddButton onClick={openModal} className='absolute bottom-10 right-10 h-20 w-20 rounded-full'><img src={Plus} alt="" /></AddButton>
                    <CheckButton onClick={handleDeque} className='absolute bottom-10 right-40 h-20 w-20 rounded-full'><img src={Check} alt="" /></CheckButton>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}