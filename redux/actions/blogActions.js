import axios from 'axios'
import absoluteUrl from 'next-absolute-url'

import {
    ALL_BLOGS_SUCCESS,
    ALL_BLOGS_FAIL,
    BLOGS_DETAILS_SUCCESS,
    BLOGS_DETAILS_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    NEW_REVIEW_RESET,
    NEW_REVIEW_FAIL,
    REVIEW_AVAILABILITY_REQUEST,
    REVIEW_AVAILABILITY_SUCCESS,
    REVIEW_AVAILABILITY_FAIL,
    ADMIN_BLOGS_REQUEST,
    ADMIN_BLOGS_SUCCESS,
    ADMIN_BLOGS_FAIL,
    NEW_BLOG_REQUEST,
    NEW_BLOG_SUCCESS,
    NEW_BLOG_RESET,
    NEW_BLOG_FAIL,
    UPDATE_BLOG_REQUEST,
    UPDATE_BLOG_SUCCESS,
    UPDATE_BLOG_RESET,
    UPDATE_BLOG_FAIL,
    DELETE_BLOG_REQUEST,
    DELETE_BLOG_SUCCESS,
    DELETE_BLOG_RESET,
    DELETE_BLOG_FAIL,
    GET_REVIEWS_REQUEST,
    GET_REVIEWS_SUCCESS,
    GET_REVIEWS_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    DELETE_REVIEW_RESET,
    DELETE_REVIEW_FAIL,

    CLEAR_ERRORS

} from '../constants/blogConstants'

// Get all blogs
export const getBlogs = (req, currentPage = 1 , location = '' , authCookie) => async (dispatch) => {
    try {

        const { origin } = absoluteUrl(req);
        const config = {
            headers: {
                cookie: authCookie
            }
        }

        let link = `${origin}/api/blogs?page=${currentPage}&location=${location}`

        const { data } = await axios.get(link, config)

      

        dispatch({
            type: ALL_BLOGS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: ALL_BLOGS_FAIL,
            payload: error.response || null
        })
    }
}

export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })
}

export const getBlogDetails = (req, id) => async (dispatch) => {
    try {

        const { origin } = absoluteUrl(req);

        let url;

        if (req) {
            url = `${origin}/api/blogs/${id}`
        } else {
            url = `/api/blogs/${id}`
        }

        const { data } = await axios.get(url)

        dispatch({
            type:  BLOGS_DETAILS_SUCCESS,
            payload: data.blog
        })

    } catch (error) {
        dispatch({
            type:  BLOGS_DETAILS_FAIL,
            payload: error.response || null
        })
    }
}

export const getAdminBlogs = () => async (dispatch) => {
    try {

        dispatch({ type: ADMIN_BLOGS_REQUEST })

        const { data } = await axios.get(`/api/admin/blogs`)

        dispatch({
            type: ADMIN_BLOGS_SUCCESS,
            payload: data.blogs
        })

    } catch (error) {

        console.log(error);

        dispatch({
            type: ADMIN_BLOGS_FAIL,
            payload: error.response.data.message || null
        })
    }
}

export const newBlog = (blogData) => async (dispatch) => {
    try {

        dispatch({ type: NEW_BLOG_REQUEST })

        const config = {
            header: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(`/api/blogs`, blogData, config)

        dispatch({
            type: NEW_BLOG_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: NEW_BLOG_FAIL,
            payload: error.response.data.message || null
        })
    }
}

export const deleteBlog = (id) => async (dispatch) => {
    try {

        dispatch({ type: DELETE_BLOG_REQUEST })

        const { data } = await axios.delete(`/api/admin/blogs/${id}`)

        dispatch({
            type: DELETE_BLOG_SUCCESS,
            payload: data.success
        })

    } catch (error) {
        dispatch({
            type: DELETE_BLOG_FAIL,
            payload: error.response.data.message
        })
    }
}