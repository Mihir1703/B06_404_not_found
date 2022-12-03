import React from 'react'

export const Navbar = () => {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-black p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <span class="font-semibold text-xl tracking-tight">Hostel Management</span>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                </div>
                <div>
                    <a href="#"
                        class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-black hover:bg-white mt-4 lg:mt-0">Logout</a>
                </div>
            </div>
        </nav>
    )
}
