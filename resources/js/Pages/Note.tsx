import AddButton from '@/Components/AddButton';
import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, useForm } from '@inertiajs/react';
import Plus from '../../../public/images/plus.png';
import Folder from '../../../public/images/folder.png';
import Dots from '../../../public/images/dots.png';
import File from '../../../public/images/file.png';
import Modal from '@/Components/Modal';
import { cloneElement, useEffect, useRef, useState } from 'react';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { IntegerType } from 'mongodb';

interface Notes {
    id: string,
    title: string,
    desc: string,
    folder_id: string
}

interface Folders {
    id: string,
    title: string,
    folder_id: string
}

interface NoteProps {
    notes: Notes[],
    folders: Folders[]
}

interface folderFormData {
    title: string,
    parent_id?: string,
    desc: string,
    folder_id: string
}

export default function Note({ folders, notes }: NoteProps) {
    const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
    const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);

    const [activeId, setActiveId] = useState<string | null>(null);
    const [parentlessFolders, setParentlessFolders] = useState<Folders[]>([]);
    const [filteredNotes, setFilteredNotes] = useState<Notes[]>([]);
    const [filteredFolders, setFilteredFolders] = useState<Folders[]>([]);

    const openNoteModal = () => setIsNoteModalOpen(true);
    const closeNoteModal = () => setIsNoteModalOpen(false);

    const openFolderModal = () => setIsFolderModalOpen(true);
    const closeFolderModal = () => setIsFolderModalOpen(false);

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const filtered = folders.filter(folder => 
            folder.folder_id === undefined || 
            folder.folder_id === null || 
            folder.folder_id === ''
        );
        setParentlessFolders(filtered);
    }, [folders]);

    const { data, setData, errors, post } = useForm<folderFormData>({
        title: "",
        parent_id: "",
        desc: "",
        folder_id: "",
    });

    function handleNoteSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("note.store"));
    }

    function handleFolderSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        post(route("folder.store"));
    }

    const handleClick = (id: string) => {
        setActiveId(id);
        const filteredNotes = notes.filter(note => note.folder_id === id);
        setFilteredNotes(filteredNotes);
        const filteredFolders = folders.filter(folder => folder.folder_id === id);
        setFilteredFolders(filteredFolders);
        setData('folder_id', id);
    }

    const handleClickOutside = (event : MouseEvent) => {
        // Check if the click target is outside the container
        if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
            setActiveId(null); // Reset activeId to null
        }
    };

    useEffect(() => {
        // Add event listener for clicks outside
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    console.log(data);
    return (
        <AuthenticatedLayout>
            <Head title="Notes" />

            <div ref={containerRef} className=' relative bg-[#540d87] bg-opacity-70 rounded-xl text-white mx-auto mt-8 max-w-[85rem] min-h-[40rem] px-4 py-8 sm:px-6 lg:px-8'>
                <div className=' grid grid-cols-[max-content_1fr] gap-5 my-auto bg-transparent h-[36rem] w-full'>

                    <div className=' border-r-4 border-[#a449d1] p-4 flex flex-col row-span-8'>
                        <div onClick={openFolderModal} className=' bg-[#a449d1] w-28 h-14 rounded-lg my-4 flex hover:bg-opacity-40 hover:cursor-pointer'>
                            <img src={Plus} alt="" className=' h-6 w-6 my-auto ml-4' />
                            <div className=' my-auto ml-4 font-semibold'>New</div>
                        </div>
                        {
                            parentlessFolders.length > 0 ? (
                                parentlessFolders.map(({ title, id }) => (
                                    <div key={id} onClick={() => handleClick(id)} className={` hover:cursor-pointer bg-[#a449d1] w-40 h-10 rounded-lg mt-4 flex hover:bg-opacity-40 focus:bg-opacity-4 ${activeId === id ? 'bg-opacity-40' : 'bg-opacity-100'
                                        }`}>
                                        <img src={Folder} alt="" className=' h-4 w-4 my-auto ml-3' />
                                        <p className=' text-[#540d87] my-auto font-bold ml-3 text-sm'>{title}</p>
                                    </div>
                                ))
                            ) : (
                                <div className=' w-40 h-10 rounded-lg mt-4'></div>
                            )
                        }
                    </div>

                    <div className=' flex flex-wrap w-full p-4'>
                        {filteredNotes.length > 0 ? (
                            filteredNotes.map(note => (
                                <div key={note.id} className=' hover:cursor-pointer bg-[#a449d1] w-48 mr-4 h-10 rounded-lg flex hover:bg-opacity-40 focus:bg-opacity-40'>
                                    <img src={File} alt="" className='h-4 w-4 my-auto ml-3' />
                                    <p className='text-[#540d87] my-auto font-bold ml-3 text-sm overflow-hidden whitespace-nowrap text-ellipsis flex-shrink-0 w-28'>
                                        {note.title}
                                    </p>
                                    <div className='my-auto w-5 h-5 ml-2'>
                                        <img src={Dots} alt="" />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <></>
                        )}
                        {filteredFolders.length > 0 ? (
                            filteredFolders.map(folder => (
                                <div key={folder.id} onClick={() => handleClick(folder.id)} className=' hover:cursor-pointer bg-[#a449d1] w-48 mr-4 h-10 rounded-lg flex hover:bg-opacity-40 focus:bg-opacity-40'>
                                    <img src={Folder} alt="" className='h-4 w-4 my-auto ml-3' />
                                    <p className='text-[#540d87] my-auto font-bold ml-3 text-sm overflow-hidden whitespace-nowrap text-ellipsis flex-shrink-0 w-28'>
                                        {folder.title}
                                    </p>
                                    <div className='my-auto w-5 h-5 ml-2'>
                                        <img src={Dots} alt="" />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <></>
                        )}
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
                                    value={data.title}
                                    className="mt-1 block w-full"
                                    autoComplete="note name"
                                    isFocused={true}
                                    onChange={(e) => setData("title", e.target.value)}
                                />
                            </div>
                            <div className=' absolute top-[12rem] right-[45%] w-[28rem] mt-4'>
                                <InputLabel className=' text-white' htmlFor="description" value="Note Description" />

                                <TextInput
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={data.desc}
                                    className="mt-1 block w-full"
                                    autoComplete="file description"
                                    onChange={(e) => setData("desc", e.target.value)}
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
