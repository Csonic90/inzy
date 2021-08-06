import React from 'react'
import { getSession } from 'next-auth/client'

import NewBlog from '../../../components/admin/NewBlog'
import Layout from '../../../components/layout/Layout'

const NewBlogPage = () => {
    return (
        <Layout title='New Blog'>
            <NewBlog />
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

export default NewBlogPage
