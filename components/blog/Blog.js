import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { clearErrors } from '../../redux/actions/blogActions'
import Pagination from 'react-js-pagination'

const Blog = () => {

    const dispatch = useDispatch()
    const router = useRouter()
    const { blogs, error, blogsCount, resPerPage } = useSelector(state => state.blogs)

    let { page = 1 } = router.query;
    page = Number(page)

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch])

    const handlePagination = (pageNumber) => {

        if (location) {
            let url = window.location.pathname


            url.includes('?page') ?
                url = url.replace(/(page=)[^\&]+/, '$1' + pageNumber)
                :
                url = url.concat(`?page=${pageNumber}`)

            router.push(url)

        } else {

            router.push(`?page=${pageNumber}`)
            // window.location.href = `/?page=${pageNumber}`
        }

    }

    let count = blogsCount;
    const DateOf = (dat) => {

        let date1 = new Date(dat);
        let date2 = new Date();
        let diff = date2 - date1;
        let day = Math.floor(diff / (1000 * 60 * 60 * 24));
        
        if (day == 1) return "1 dzień temu";
        else return day + " dni temu";
    }



    return (
        <div className='container container-fluid  '>
            <h1 className='my-5 p-2 m-3'>Informacje</h1>
            {blogs && blogs.map(blog =>
                <div key={blog._id} className="row-md-10 shadow-lg p-3 m-3 pb-5 ">
                    <h1>{blog.title}</h1>
                    {/* <img src="https://images.unsplash.com/photo-1526900913101-88c16676ca02" alt="post img" className="pull-left img-responsive thumb  img-thumbnail 100" /> */}
                    <article><p>{blog.context.length>50? blog.context.substring(0,50) + "..." : blog.context }</p></article>
                    <p><i>Opublikowano: {DateOf(blog.createdAt)}</i></p>                    

                        <Link href={`/information/${blog._id}`}> 
                        <button className="btn btn-info pull-right">CZYTAJ WIĘCEJ...</button></Link>

                </div>
            )}

            {resPerPage < count &&
                <div className="d-flex justify-content-center mt-5">
                    <Pagination
                        activePage={page}
                        itemsCountPerPage={resPerPage}
                        totalItemsCount={blogsCount}
                        onChange={handlePagination}
                        nextPageText={'Następna'}
                        prevPageText={'Poprzednia'}
                        firstPageText={'Pierwsza'}
                        lastPageText={'Ostatnia'}
                        itemClass='page-item'
                        linkClass='page-link'
                    />
                </div>
            }

        </div>

    )
}

export default Blog