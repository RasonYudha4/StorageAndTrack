import AddButton from '@/Components/AddButton';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Plus from '../../../public/images/plus.png';
import Folder from '../../../public/images/folder.png';
import Dots from '../../../public/images/dots.png';
import Modal from '@/Components/Modal';
import { cloneElement, useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

interface Notes {
    title: string,
    folder_id: string
}

interface Folders {
    title: string,
    parent_id: string
}

interface NoteProps {
    notes: Notes[],
    folders: Folders[]
}

interface folderFormData {
    title: string,
    parent_id?: string,
}

interface noteFormData {
    title: string,
    desc: string,
    folder_id: string
}

export default function Note({ folders, notes }: NoteProps) {
    const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
    const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);

    const [fileData, setFileData] = useState({ title: '', desc: '' });

    const openNoteModal = () => setIsNoteModalOpen(true);
    const closeNoteModal = () => setIsNoteModalOpen(false);

    const openFolderModal = () => setIsFolderModalOpen(true);
    const closeFolderModal = () => setIsFolderModalOpen(false);

    function handleFolderSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("folder.store"));
    };

    function handleNoteSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("note.store"));
    }

    const { data, setData, errors, post } = useForm<folderFormData | noteFormData>({
        title: "",
        parent_id: "",
        desc: "",
        folder_id: "",
    });

    return (
        <AuthenticatedLayout>
            <Head title="Notes" />

            <div className=' relative bg-[#540d87] bg-opacity-70 rounded-xl text-white mx-auto mt-8 max-w-[85rem] min-h-[40rem] px-4 py-8 sm:px-6 lg:px-8'>
                <div className=' grid grid-cols-[max-content_1fr] gap-5 my-auto bg-transparent h-[36rem] w-full'>

                    <div className=' border-r-4 border-[#a449d1] p-4 flex flex-col row-span-8'>
                        <div onClick={openFolderModal} className=' bg-[#a449d1] w-28 h-14 rounded-lg my-4 flex hover:bg-opacity-40 hover:cursor-pointer'>
                            <img src={Plus} alt="" className=' h-6 w-6 my-auto ml-4' />
                            <div className=' my-auto ml-4 font-semibold'>New</div>
                        </div>
                        {
                            folders.length > 0 ? (
                                folders.map(({ title }) => (
                                    <div className=' bg-[#a449d1] w-40 h-10 rounded-lg mt-4 flex hover:bg-opacity-40 focus:bg-opacity-40'>
                                        <img src={Folder} alt="" className=' h-4 w-4 my-auto ml-3' />
                                        <p className=' text-[#540d87] my-auto font-bold ml-3 text-sm'>{title}</p>
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
                            )
                        }
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
                            <p className=' text-[#540d87] my-auto font-bold ml-3 text-sm'>Folder 4</p>
                            <div className=' my-auto w-5 h-5 ml-16 hover:cursor-pointer'>
                                <img src={Dots} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
                <Modal show={isFolderModalOpen} onClose={closeFolderModal}>
                    <form onSubmit={handleFolderSubmit}>
                        <div className=' w-[64rem] h-72 bg-[#540d87] relative'>
                            <p className=' absolute text-5xl font-medium text-white right-[56%] top-8'>Add Folder</p>
                            <div className=' absolute top-[6rem] right-[45%] w-[28rem] mt-4'>
                                <InputLabel className=' text-white' htmlFor="folder" value="Folder Name" />

                                <TextInput
                                    id="folder"
                                    type="text"
                                    name="folder"
                                    value={data.title}
                                    className="mt-1 block w-full"
                                    autoComplete="folder name"
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
                <Modal show={isNoteModalOpen} onClose={closeNoteModal}>
                    <form onSubmit={handleNoteSubmit}>
                        <div className=' w-[64rem] h-[24rem] bg-[#540d87] relative'>
                            <p className=' absolute text-5xl font-medium text-white right-[56%] top-8'>Add Note</p>
                            <div className=' absolute top-[6rem] right-[45%] w-[28rem] mt-4'>
                                <InputLabel className=' text-white' htmlFor="file" value="Note Name" />

                                <TextInput
                                    id="file"
                                    type="text"
                                    name="folder"
                                    value={fileData.title}
                                    className="mt-1 block w-full"
                                    autoComplete="folder name"
                                    isFocused={true}
                                    onChange={(e) => setFileData({ ...fileData, title: e.target.value })}
                                />
                            </div>
                            <div className=' absolute top-[12rem] right-[45%] w-[28rem] mt-4'>
                                <InputLabel className=' text-white' htmlFor="description" value="Note Description" />

                                <TextInput
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={fileData.desc}
                                    className="mt-1 block w-full"
                                    autoComplete="file description"
                                    isFocused={true}
                                    onChange={(e) => setFileData({ ...fileData, desc: e.target.value })}
                                />
                            </div>
                            <PrimaryButton className=' absolute bg-black top-[20rem] right-[62.5%] hover:bg-slate-600'>Submit</PrimaryButton>
                        </div>
                    </form>
                </Modal>
                <AddButton onClick={openNoteModal} className='absolute bottom-10 right-10 h-20 w-20 rounded-full'><img src={Plus} alt="" /></AddButton>
            </div>
        </AuthenticatedLayout>
    );
}
