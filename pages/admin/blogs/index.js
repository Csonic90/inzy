import React from 'react'
import { getSession } from 'next-auth/client'

import AllBlogs from '../../../components/admin/AllBlogs'
import Layout from '../../../components/layout/Layout'

const AllBlogsPage = () => {
    return (
        <Layout title='All Blogs'>
            <AllBlogs />
        </Layout>
    )
}

export async function getServerSideProps(context) {

    const session = await getSession({ req: context.req })

    if (!session || session.user.role !== 'admin') {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }

}

export default AllBlogsPage