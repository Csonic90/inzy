import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Pagination from 'react-js-pagination'

import RoomItem from './room/RoomItem'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { clearErrors } from '../redux/actions/roomActions'

const Home = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const { rooms, resPerPage, roomsCount, filteredRoomsCount, error } = useSelector(state => state.allRooms);

    let { location, page = 1 } = router.query;
    page = Number(page)

    useEffect(() => {
        toast.error(error)
        dispatch(clearErrors())
    }, [])

    const handlePagination = (pageNumber) => {

        if (location) {
            let url = window.location.search

            url.includes('&page') ?
                url = url.replace(/(page=)[^\&]+/, '$1' + pageNumber)
                :
                url = url.concat(`&page=${pageNumber}`)

            router.push(url)

        } else {

            router.push(`/?page=${pageNumber}`)
            // window.location.href = `/?page=${pageNumber}`
        }

    }

    let count = roomsCount;
    if (location) {
        count = filteredRoomsCount
    }

    return (
        <>
            <section id="rooms" className="container mt-5">

                <h2 className='mb-3 ml-2 stays-heading'> Mamy aktualnie :</h2>

                
                    
                        <h3  className='mb-2 ml-1 '>- 95 - mieszkań</h3> 
                        <h3  className='mb-2 ml-1 '>- 150 - mieszkańców</h3>     
                        <h3  className='mb-2 ml-1 '>- 95 - mieszkań</h3> 
                        
                <div className="row">
                  
                </div>
            </section>

            
        </>
    )
}

export default Home
