import React from 'react'
import { getSession } from 'next-auth/client'
import Layout from '../../components/layout/Layout'
import Blog from '../../components/blog/Blog'

import { getBlogs } from '../../redux/actions/blogActions'

import { wrapper } from '../../redux/store'


const BlogPage = () => {
    return (
        <Layout title='My Bookings'>
           <Blog/>
        </Layout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, query, store }) => {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    await store.dispatch(getBlogs(req, query.page, query.location, req.headers.cookie))

})

export default BlogPage
