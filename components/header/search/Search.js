"use client"

import { IconSearch } from '@tabler/icons-react'
import Input from '../../forms/input/Input'

import Link from 'next/link'

function Search() {

    const searchHandler = () => { }

    return (
        <div className='flex justify-between border-2 p-2 bg-white  rounded-3xl w-full'>
            <Input type="text" placeholder="دنبال چی میگردی؟" name="search" value={null} onChange={searchHandler} />
            <div >
                <Link href="./#">
                    <IconSearch />
                </Link>
            </div>

        </div>
    )
}

export default Search