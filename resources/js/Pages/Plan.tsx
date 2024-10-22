import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import AddButton from '@/Components/AddButton';
import { Head } from '@inertiajs/react';
import Plus from '../../../public/images/plus.png';
import Check from '../../../public/images/check.png';
import CheckButton from '@/Components/CheckButton';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useState } from 'react';

export default function Plan() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    function setData(arg0: string, value: string): void {
        throw new Error('Function not implemented.');
    }
    return (
        <AuthenticatedLayout>
            <Head title="Tasks" />

            <div className=' relative bg-[#540d87] rounded-xl opacity-70 mx-auto mt-8 max-w-[85rem] min-h-[40rem] px-4 py-8 sm:px-6 lg:px-8'>
                <div className=' my-auto bg-transparent h-[36rem] overflow-y-auto'>
                    <div className='bg-[#a449d1] w-full h-12 rounded-3xl mb-8 flex items-center'>
                        <p className='text-white ml-8'>1. Help</p>
                    </div>
                    <Modal show={isModalOpen} onClose={closeModal}>
                        <div className=' w-[64rem] h-72 bg-[#540d87] relative'>
                            <p className=' absolute text-5xl font-medium text-white right-[57%] top-8'>Add Plan</p>
                            <div className=' absolute top-[6rem] right-[45%] w-[28rem] mt-4'>
                                <InputLabel className=' text-white' htmlFor="planTitle" value="Plan Title" />

                                <TextInput
                                    id="planTitle"
                                    type="text"
                                    name="planTitle"
                                    value={"ppepepepe"}
                                    className="mt-1 block w-full"
                                    autoComplete="planTitle"
                                    isFocused={true}
                                    onChange={(e) => setData('planTitle', e.target.value)}
                                />
                            </div>
                            <PrimaryButton className=' absolute bg-black top-[14rem] right-[62.5%] hover:bg-slate-600'>Submit</PrimaryButton>
                        </div>
                    </Modal>
                    <AddButton onClick={openModal} className='absolute bottom-10 right-10 h-20 w-20 rounded-full'><img src={Plus} alt="" /></AddButton>
                    <CheckButton className='absolute bottom-10 right-40 h-20 w-20 rounded-full'><img src={Check} alt="" /></CheckButton>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}