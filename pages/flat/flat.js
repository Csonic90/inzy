import React from 'react'
import { getSession } from 'next-auth/client'

import MyFlat from '../../components/flat/MyFlat'
import Layout from '../../components/layout/Layout'

import { getmyFlat } from '../../redux/actions/flatActions'
import { wrapper } from '../../redux/store'

const FlatPage = () => {
    return (
        <Layout title='Moje mieszkanie'>
            <MyFlat/>
        </Layout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, store }) => {
    const session = await getSession({ req })

    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    await store.dispatch(getmyFlat(req.headers.cookie, req))

})

export default FlatPage