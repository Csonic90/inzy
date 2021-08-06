import { getSession } from 'next-auth/client'

import MyAccident  from '../../components/accident/MyAccident'
import Layout from '../../components/layout/Layout'

import { wrapper } from '../../redux/store'

const AccidentPage = () => {
    return (
        <Layout title='My Bookings'>
            <MyAccident/>
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

    //await store.dispatch(myBookings(req.headers.cookie, req))

})

export default AccidentPage