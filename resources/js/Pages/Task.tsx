import AddButton from '@/Components/AddButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Plus from '../../../public/images/plus.png';
import Trash from '../../../public/images/trash.png';
import Left from '../../../public/images/angle-left.png';
import Right from '../../../public/images/angle-right.png';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { useState } from 'react';

interface FormData {
    title: string;
    desc: string;
}

interface Task {
    title: string;
    desc: string
}

interface PageProps {
    task: Task;
}

export default function Task({ task }: PageProps) {
    const { data, setData, errors, post } = useForm<FormData>({
        title: "",
        desc: ""
    });

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("task.store"));
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <AuthenticatedLayout>
            <Head title="Tasks" />
            <Head title="Tasks" />

            <div className=' relative bg-[#540d87] rounded-xl opacity-70 mx-auto mt-8 max-w-[85rem] min-h-[40rem] px-4 py-8 sm:px-6 lg:px-8'>
                <div className=' my-auto bg-transparent h-[36rem] w-full'>
                    <div className=' flex justify-between '>
                        <div className=' flex'>

                            <div className=' bg-[#a449d1] rounded-full h-12 w-12 mt-5 ml-6 hover:bg-[#540d87]'><img src={Left} alt="" className=' h-6 w-6 m-3 ' /></div>
                            <div className=' bg-[#a449d1] rounded-full h-12 w-12 mt-5 ml-6 hover:bg-[#540d87]'><img src={Right} alt="" className=' h-6 w-6 m-3 ' /></div>
                        </div>
                        <div className=' h-10 w-10 m-5 hover:opacity-80'>
                            <img src={Trash} alt="" />
                        </div>
                    </div>
                    {
                        task ? (
                            <div className=' mx-10'>
                                <div className=' pt-6 pb-2 text-white text-6xl'>
                                    {task.title}
                                </div>
                                <div className=' border-b-4 border-[#a449d1] '></div>
                                <div className=' pt-6 pl-2 text-white text-xl'> {task.desc}</div>
                            </div>
                        ) : (
                            <div className=' absolute top-[45%] left-[42.5%] text-2xl text-white'>
                                No task found
                            </div>
                        )
                    }
                    <Modal show={isModalOpen} onClose={closeModal}>
                        <form onSubmit={handleSubmit}>
                            <div className=' w-[64rem] h-[24rem] bg-[#540d87] relative'>
                                <p className=' absolute text-5xl font-medium text-white right-[57%] top-8'>Add Task</p>
                                <div className=' absolute top-[6rem] right-[45%] w-[28rem] mt-4'>
                                    <InputLabel className=' text-white' htmlFor="taskTitle" value="Task Title" />

                                    <TextInput
                                        id="taskTitle"
                                        type="text"
                                        name="taskTitle"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autoComplete="taskTitle"
                                        isFocused={true}
                                        onChange={(e) => setData('title', e.target.value)}
                                    />
                                    {errors.title && (
                                        <span className="text-red-600 text-sm">
                                            {errors.desc}
                                        </span>
                                    )}
                                </div>
                                <div className=' absolute top-[12rem] right-[45%] w-[28rem] mt-4'>
                                    <InputLabel className=' text-white' htmlFor="content" value="Details" />

                                    <TextInput
                                        id="content"
                                        type="text"
                                        name="content"
                                        value={data.desc}
                                        className="mt-1 block w-full"
                                        autoComplete="content"
                                        isFocused={true}
                                        onChange={(e) => setData('desc', e.target.value)}
                                    />
                                    {errors.title && (
                                        <span className="text-red-600 text-sm">
                                            {errors.desc}
                                        </span>
                                    )}
                                </div>

                                <PrimaryButton type="submit" className=' absolute bg-black top-[20rem] right-[62.5%] hover:bg-slate-600'>Submit</PrimaryButton>
                            </div>
                        </form>
                    </Modal>
                    <AddButton onClick={openModal} className='absolute bottom-10 right-10 h-20 w-20 rounded-full'><img src={Plus} alt="" /></AddButton>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}