import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { clearErrors } from '../../redux/actions/blogActions'
import Blog from './Blog';

const BlogDetails = () => {

    const dispatch = useDispatch()

    const router = useRouter();

    // const { myflats, error } = useSelector(state => state.myflats)


    const { id } = router.query;

    const { blogDetails, error } = useSelector(state => state.blogDetails);

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch])



    return (
        <div className='container container-fluid  '>
            <h1 className='my-5 p-2 m-3'>
                {blogDetails.title}
            </h1>

            <div className="row-md-10 shadow-lg p-3 m-3 pb-5 ">
                <article>
                    <p>
                        {blogDetails.context}
                    </p>
                </article>
            </div>
            <Link className="btn btn-info" href="/information/blog"><a className="btn btn-info" >COFNIJ</a></Link>

        </div>
    )
}

export default BlogDetails