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

export const allBlogReducer = (state = { blogs: [] }, action) => {
    switch (action.type) {

        case ADMIN_BLOGS_REQUEST:
            return {
                loading: true,
            }

        case ALL_BLOGS_SUCCESS:
            return {
                blogsCount: action.payload.blogsCount,
                resPerPage: action.payload.resPerPage,
                filteredBlogsCount: action.payload.filteredBlogsCount,
                blogs: action.payload.blogs
            }

        case ADMIN_BLOGS_SUCCESS:
            return {
                loading: false,
                blogs: action.payload
            }

        case ALL_BLOGS_FAIL:
        case ADMIN_BLOGS_FAIL:
            return {
                error: action.payload 
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const blogDetailsReducer = (state = { blogDetails: {} }, action) => {
    switch (action.type) {
        case BLOGS_DETAILS_SUCCESS:
            return {
                blogDetails: action.payload
            }

        case BLOGS_DETAILS_FAIL:
            return {
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}



export const newBlogReducer = (state = { blogs: {} }, action) => {
    switch (action.type) {
        case NEW_BLOG_REQUEST:
            return {
                loading: true
            }

        case NEW_BLOG_SUCCESS:
            return {
                loading: false,
                success: action.payload.success,
                blog: action.payload.blog
            }

        case NEW_BLOG_RESET:
            return {
                success: false
            }

        case NEW_BLOG_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}

export const blogReducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_BLOG_REQUEST:
        case DELETE_BLOG_REQUEST:
            return {
                loading: true
            }

        case UPDATE_BLOG_SUCCESS:
            return {
                loading: false,
                isUpdated: action.payload
            }

        case DELETE_BLOG_SUCCESS:
            return {
                loading: false,
                isDeleted: action.payload
            }

        case UPDATE_BLOG_RESET:
            return {
                isUpdated: false
            }

        case DELETE_BLOG_RESET:
            return {
                loading: false,
                isDeleted: false
            }

        case UPDATE_BLOG_FAIL:
        case DELETE_BLOG_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state
    }
}