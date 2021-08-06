import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useDispatch, useSelector } from 'react-redux'
import { loadUser } from '../../redux/actions/userActions'
import { signOut } from 'next-auth/client'

const Header = () => {

    const dispatch = useDispatch()

    const { user, loading } = useSelector(state => state.loadedUser)

    useEffect(() => {
        if (!user) {
            dispatch(loadUser())
        }
    }, [dispatch, user])


    const logoutHandler = () => {
        signOut();
    }

    return (
        <>
        <nav className="navbar row justify-content-center sticky-top">
            <div className="container">
                <div >

                    {user ? (
                        <ul className="nav">
                            
                            <Link href='/'>

                                <Image
                                    src="/logo1.png"
                                    alt="Picture of the author"
                                    width="130"
                                    height="61"
                                />

                            </Link>
                            <Link href='/information/blog'>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-outline-info  m-1 	d-none d-sm-block"> <i class="bi bi-info-square"></i> Informacje</button>
                                </li>
                            </Link>
                            <Link href='/meet/meet'>
                                <li className="nav-item">
                                    <button type="button" className="nav-link btn btn-outline-info  m-1 d-none d-sm-block"><i class="bi bi-person-bounding-box"></i> Zebrania</button>
                                </li>
                            </Link>
                            <Link href='/flat/flat'>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-outline-info  m-1 d-none d-sm-block"><i class="bi bi-house"></i> Mieszkanie</button>
                                </li>
                            </Link>
                            <Link href='/accident/accident'>
                                <li className="nav-item">
                                    <button className="nav-link btn btn-outline-info  m-1 d-none d-sm-block"><i class="bi bi-exclamation-square"></i> Awarie</button>
                                </li>
                            </Link>

                            {user.role === 'admin' && (
                                <>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link btn btn-warning m-1 dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><i class="bi bi-building"></i> Administracja</a>
                                        <div className="dropdown-menu">
                                            <Link href='/admin/blogs'>
                                                <a className="dropdown-item ">Zarządzaj Informacjami</a>
                                            </Link>
                                            <Link href='/admin/rooms'>
                                                <a className="dropdown-item">Zarządzaj Mieszkaniami</a>
                                            </Link>
                                            <Link href='/admin/rooms'>
                                                <a className="dropdown-item">Zarządzaj Zebraniami</a>
                                            </Link>
                                            <Link href='/admin/bookings'>
                                                <a className="dropdown-item">Zarządzaj Awariami</a>
                                            </Link>
                                            <Link href='/admin/users'>
                                                <a className="dropdown-item">Użytkownicy</a>
                                            </Link>
                                        </div>
                                    </li>
                                </>
                            )
                            }
                        </ul>
                    ) : 'nie zlaogowany'}
                </div>
                <div className=" mt-md-0 text-center">

                    {user ? (
                        <div className="ml-4 dropdown d-line">
                            <a
                                className="btn dropdown-toggle mr-4"
                                id='dropDownMenuButton'
                                data-toggle='dropdown'
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                <span>Zalogowany: </span>
                                <span>{user && user.name}</span>
                            </a>

                            <div className="dropdown-menu" aria-labelledby='dropDownMenuButton'>

                                <Link href='/me/update'>
                                    <a className="dropdown-item">Profil</a>
                                </Link>

                                <Link href='/'>
                                    <a className="dropdown-item text-danger" onClick={logoutHandler}>Wyloguj</a>
                                </Link>

                            </div>

                        </div>
                    ) :
                        !loading && <Link href='/login'>
                            <a className="btn btn-danger px-4 text-white login-header-btn float-right">Zaloguj</a>
                        </Link>
                    }


                </div>
            </div>

        </nav>


         <nav className="navbar row justify-content-center text-center fixed-bottom d-block d-sm-none">
         <div className="container ">
             <div >

                 {user ? (
                     <ul className="nav text-center">
                         
                         <Link href='/information/blog'>
                             <li className="nav-item">
                                 <button className="nav-link btn btn-outline-info m-1"><div><i class="bi bi-info-square"></i></div> Informacje</button>
                             </li>
                         </Link>
                         <Link href='/meet/meet'>
                             <li className="nav-item">
                                 <button type="button" className="nav-link btn btn-outline-info  m-1 "><div><i class="bi bi-person-bounding-box"></i></div> Zebrania</button>
                             </li>
                         </Link>
                         <Link href='/flat/flat'>
                             <li className="nav-item">
                                 <button className="nav-link btn btn-outline-info  m-1"><div><i class="bi bi-house"></i></div> Mieszkanie</button>
                             </li>
                         </Link>
                         <Link href='/accident/accident'>
                             <li className="nav-item">
                                 <button className="nav-link btn btn-outline-info  m-1"><div><i class="bi bi-exclamation-square"></i></div> Awarie</button>
                             </li>
                         </Link>


                     </ul>
                 ) : 'nie zlaogowany'}
             </div>
             
                 


            
         </div>

     </nav>
    </>
    )
}

export default Header
