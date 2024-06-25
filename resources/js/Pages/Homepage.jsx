import React from 'react';
import { Head } from '@inertiajs/react';
import Navbar from '@/Components/Homepage/Navbar';
import CardNews from '@/Components/Homepage/CardNews';
import Pluginator from '@/Components/Homepage/Pluginator';

export default function Homepage(props){
    return (
        <div className='min-h-screen bg-base-300 text-white text-2xl'>
            <Head title={props.title}/>
            <Navbar user={props.auth.user}/>
            <p className='text-center text-2xl m-5 mb-10'> {props.description} </p>
            <div className='flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch gap-7 items-center '>
            <CardNews news={props.news.data}/>
            </div>
            <div className='felx justify-center items-center m-5'>
                <Pluginator meta={props.news.meta}/>
            </div>
        </div>
    );
}
