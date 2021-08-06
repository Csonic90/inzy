import React, { useEffect } from 'react'
import { getSession } from 'next-auth/client'
import Link from 'next/link'

import Layout from '../../components/layout/Layout'

import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../redux/actions/userActions'
import ButtonLoader from '../../components/layout/ButtonLoader'
import { wrapper } from '../../redux/store'
import Jitsi from 'react-jitsi'
import { useRouter } from "next/router"


const MeetPage = () => {

    const router = useRouter()
    const { id } = router.query;

    
    const dispatch = useDispatch()

    const { user, loading } = useSelector(state => state.loadedUser)

    useEffect(() => {
        if (!user) {
            dispatch(loadUser())
        }
    }, [dispatch, user])

    console.log(user)
    return (
        <Layout title='Pokoj Sptokania'>
            <div className='container container-fluid text-center  '>
                <h1 className='my-5 p-2 m-3'>Spotkanie {id}</h1>

                <div className="row-md-10 shadow-lg  m-3  ">
                <Jitsi 
                    roomName={id} 
                    displayName={user?.name}
                    loadingComponent={ButtonLoader}
                    containerStyle={{ width:'100%', height: '500px' }}
                    />

                </div>
                <Link  href="/meet/meet"><a className="btn btn-info text-center" >Wróć do listy</a></Link>
               


            </div>
        </Layout>
    )
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ req, params, store }) => {
    const session = await getSession({ req })



    if (!session) {
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    //  await store.dispatch(getBookingDetails(req.headers.cookie, req, params.id))

})

export default MeetPage
