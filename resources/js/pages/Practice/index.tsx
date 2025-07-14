import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Link } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Practice',
        href: '/practice',
    },
];

export default function index() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Practice" />
            <h1>Testing</h1>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <Link href={route('practice.create')}><button>Course</button></Link>
            </div>
        </AppLayout>
    );
}

