import React, { useState } from 'react'
import Navigation from '../components/shared/Navigation'
import BackButton from '../components/shared/BackButton'
import TableCard from '../components/tables/TableCard'
import { tables } from "../constants"

const Tables = () => {

    const [status, setStatus] = useState("all");

    return (
        <section className='h-[calc(100vh - 5rem)] overflow-hidden'>
            <div className='flex items-center justify-between px-10 py-4'>
                <div className='flex items-center gap-4'>
                    <BackButton />
                    <h1 className='text-gray-800 text-2xl font-bold tracking-wider'>
                        Tables
                    </h1>
                </div>
                <div className='text-gray-500 flex items-center justify-around gap-4'>
                    <button
                        onClick={() => setStatus("all")}
                        className={`text-lg ${status === "all" && "bg-[#9D5623] text-white rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold cursor-pointer`}>
                        All
                    </button>
                    <button
                        onClick={() => setStatus("booked")}
                        className={`text-lg ${status === "booked" && "bg-[#9D5623] text-white rounded-lg px-5 py-2"} rounded-lg px-5 py-2 font-semibold cursor-pointer`}>
                        Booked
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-3 px-16 py-4 h-[650px] overflow-y-scorll scrollbar-hide'>
                {
                    tables.map((table) => {
                        return (
                            <TableCard
                                key={table.id}
                                name={table.name}
                                status={table.status}
                                initials={table.initial}
                                seats={table.seats}
                            />
                        )
                    })
                }
            </div>
            <Navigation />
        </section>
    )
}

export default Tables
