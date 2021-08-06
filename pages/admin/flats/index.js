import React from 'react'
import { getSession } from 'next-auth/client'

import AllFlats from '../../../components/admin/AllFlats'
import Layout from '../../../components/layout/Layout'

const AllFlatsPage = () => {
    return (
        <Layout title='All Flats'>
            <AllFlats />
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

export default AllFlatsPage