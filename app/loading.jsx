'use client'
import React from 'react'
import { Spinner } from '@material-tailwind/react'
const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center mx-auto'>
            <Spinner color="teal" className="h-48 w-48" />
        </div>
    )
}

export default Loading