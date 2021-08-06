import React, { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { MDBDataTable } from 'mdbreact'
import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { getAdminBlogs, deleteBlog } from '../../redux/actions/blogActions'
import { DELETE_BLOG_RESET } from '../../redux/constants/blogConstants'
import { blogDetailsReducer } from '../../redux/reducers/blogReducers'

const AllBlogs = () => {

    const dispatch = useDispatch()
    const router = useRouter()

    const { loading, error, blogs } = useSelector(state => state.blogs)
    const { error: deleteError, isDeleted } = useSelector(state => state.blog)

    console.log(deleteError,' ', isDeleted )
    useEffect(() => {

        dispatch(getAdminBlogs())

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (deleteError) {
            toast.erroe(deleteError);
            dispatch(clearErrors())
        }

        if (isDeleted) {
            router.push('/admin/blogs')
            dispatch({ type: DELETE_BLOG_RESET })
        }

    },[dispatch, deleteError, isDeleted])


    const setBlogs = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Tytuł',
                    field: 'title',
                    sort: 'asc'
                },
                {
                    label: 'Treść',
                    field: 'context',
                    sort: 'asc'
                },
                {
                    label: 'Akcje',
                    field: 'actions',
                    sort: 'asc'
                }

            ],
            rows: []
        }

        blogs && blogs.forEach(blog => {
            data.rows.push({
                id: blog._id,
                title: blog.title,
                context:  blog.context.length>50? blog.context.substring(0,50) + "..." : blog.context,
                actions:
                    <>
                        <Link href={`/admin/blogs/${blog._id}`}>
                            <a className="btn btn-primary">
                                <i className="fa fa-pencil"></i>
                            </a>
                        </Link>

                        <button className="btn btn-danger mx-2" onClick={() => deleteBlogHandler(blog._id)}>
                            <i className="fa fa-trash"></i>
                        </button>

                    </>
            })
        })

        return data;

    }

    const deleteBlogHandler = (id) => {
        dispatch(deleteBlog(id))
    }


    return (
        <div className='container container-fluid'>
            {loading ? <Loader /> :
                <>
                    <h1 className='my-5'>{`${blogs && blogs.length} Artykułów`}

                        <Link href='/admin/blogs/new'>
                            <a className="mt-0 btn btn-success text-white float-right ">Dodaj Informacje</a>
                        </Link>

                    </h1>


                    <MDBDataTable
                        data={setBlogs()}
                        className='px-3'
                        bordered
                        striped
                        hover
                        entriesLabel="Pokaż wpisów"
                        paginationLabel={['Poprzednia', 'Następna']}
                        searchLabel="Wyszukaj"
                        infoLabel={['Od','do', 'z', 'wpisów']}
                        noRecordsFoundLabel= "Brak wyników do  wyświetenia"
                    />
                </>
            }
        </div>
    )
}

export default AllBlogs
