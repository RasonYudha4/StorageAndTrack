import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Note() {
    return (
        <AuthenticatedLayout>
            <Head title="Note" />

            
        </AuthenticatedLayout>
    );
}