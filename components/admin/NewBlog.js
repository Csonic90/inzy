import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import ButtonLoader from '../layout/ButtonLoader'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';

import { newBlog, clearErrors } from '../../redux/actions/blogActions'
import { NEW_BLOG_RESET } from '../../redux/constants/blogConstants'

const NewBlog = () => {

    const [title, setTitle] = useState('')
    const [context, setContext] = useState('')

    const dispatch = useDispatch()
    const router = useRouter()

    const { loading, error, success } = useSelector(state => state.newBlog)

    useEffect(() => {

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            router.push('/admin/blogs')
            dispatch({ type: NEW_BLOG_RESET })
        }

    }, [dispatch, error, success])

    const submitHandler = (e) => {
        e.preventDefault()

        const blogData = {
            title,
            context,
            user: 'ID'
        }
        dispatch(newBlog(blogData))
    }


    return (
        <div className="container container-fluid">
            <div className="row wrapper">
                <div className="col-10 col-lg-8">
                    <form className="shadow-lg" onSubmit={submitHandler} enctype="multipart/form-data">
                        <h1 className="mb-4">Nowy Artykuł</h1>
                        <div className="form-group">
                            <label htmlFor="name_field">Tytuł</label>
                            <input
                                type="text"
                                id="name_field"
                                className="form-control"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            />
                        </div>
                
                        <div className="form-group">
                            <label htmlFor="description_field">Treść</label>
                            <textarea
                                className="form-control"
                                id="description_field"
                                rows="8"
                                value={context}
                                onChange={(e) => setContext(e.target.value)}
                                required
                            ></textarea>
                        </div>
                    
                   
                        <button
                            type="submit"
                            className="btn btn-block py-3"
                            disabled={loading ? true : false}
                        >
                            {loading ? <ButtonLoader /> : 'Zatwierdz'}
                        </button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default NewBlog
