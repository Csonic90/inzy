import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { clearErrors } from '../../redux/actions/blogActions'
import Pagination from 'react-js-pagination'

const Meet = () => {

    //const dispatch = useDispatch()
    const router = useRouter()
    // const { blogs, error, blogsCount, resPerPage } = useSelector(state => state.blogs)



    // useEffect(() => {
    //     if (error) {
    //         toast.error(error);
    //         dispatch(clearErrors())
    //     }

    // }, [dispatch])





    return (
        <div className='container container-fluid  '>
            <h1 className='my-5 p-2 m-3 text-center'>Zebrania</h1>

            <div>
                <Link href="/meet/zebranie_numer_1"><button className="btn btn-info  m-2 p-5 " ><div><b>ZEBRANIE NUMER 1</b></div> data rozpoczecia : 12.12.2030</button></Link>
                <Link href="/meet/zebraniejakiesnumer2"><button className="btn btn-info m-2 p-5" ><div><b>ZEBRANIE NUMER 2</b></div>data rozpoczecia : 12.12.2030</button></Link>
                <Link href="/meet/zebraniejakiesnumer3"><button className="btn btn-info m-2 p-5" ><div><b>ZEBRANIE NUMER 3</b></div>data rozpoczecia : 12.12.2030</button></Link>
                <Link href="/meet/zebraniejakiesnumer4"><button className="btn btn-info m-2 p-5" ><div><b>ZEBRANIE NUMER 4</b></div>data rozpoczecia : 12.12.2030</button></Link>
                <Link href="/meet/zebraniejakiesnumer5"><button className="btn btn-info m-2 p-5" ><div><b>ZEBRANIE NUMER 5</b></div>data rozpoczecia : 12.12.2030</button></Link>
                <Link href="/meet/zebraniejakiesnumer6"><button className="btn btn-info m-2 p-5" ><div><b>Pokoj otwarty  rozmów</b> </div>data rozpoczecia : 12.12.2030</button></Link>
                <Link href="/meet/zebraniejakiesnumer7"><button className="btn btn-info m-2 p-5" ><div><b>Pogaduchy</b></div>data rozpoczecia : 12.12.2030</button></Link>
            </div>

        </div>

    )
}

export default Meet