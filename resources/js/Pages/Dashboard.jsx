import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { Inertia } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard({ auth }) {
    const [title, setTitle]= useState('');
    const [description, setDescription]= useState('');
    const [category, setCategory]= useState('');

    const handelSumbit = () => {
        const data = {
            title, description, category
        } 
        Inertia.post('/news', data)
    }
    console.log ('props last',props)
    return (
         <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">update news</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-100">
                        <input type="text" placeholder="Type here" className="input input-bordered w-full m-2" onChange={(title) => setTitle(title.target.value)}/>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full m-2" onChange={(description) => setDescription(description.target.value)}/>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full m-2" onChange={(category) => setCategory(category.target.value)}/>
                        <button className="btn btn-neutral m-2" onClick={() => handelSumbit()}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
