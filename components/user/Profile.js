import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { toast } from 'react-toastify'
import ButtonLoader from '../layout/ButtonLoader'
import Loader from '../layout/Loader'

import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, clearErrors } from '../../redux/actions/userActions'
import { UPDATE_PROFILE_RESET } from '../../redux/constants/userConstants'

const Profile = () => {

    const dispatch = useDispatch()
    const router = useRouter();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = user

    const [avatar, setAvatar] = useState('');
    const [avatarPreview, setAvatarPreview] = useState('/images/default_avatar.jpg');

    const { user: loadedUser, loading } = useSelector(state => state.loadedUser)
    const { error, isUpdated, loading: updateLoading } = useSelector(state => state.user)

    useEffect(() => {

        if (loadedUser) {
            setUser({
                name: loadedUser.name,
                email: loadedUser.email
            })
            setAvatarPreview(loadedUser.avatar.url)
        }

        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

        if (isUpdated) {
            router.push('/');
            dispatch({ type: UPDATE_PROFILE_RESET })
        }

    }, [dispatch, isUpdated, error, loadedUser])


    const submitHandler = (e) => {
        e.preventDefault();

        const userData = {
            name, email, password, avatar
        }

        dispatch(updateProfile(userData))

    }

    const onChange = (e) => {

        if (e.target.name === 'avatar') {

            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setAvatar(reader.result);
                    setAvatarPreview(reader.result);
                }
            }

            reader.readAsDataURL(e.target.files[0])

        } else {
            setUser({ ...user, [e.target.name]: e.target.value })
        }

    }


    return (
        <>
            {loading ? <Loader /> :
                <div className="container container-fluid">
                    <div className="row wrapper">
                        <div className="col-10 col-lg-5">
                            <form className="shadow-lg" onSubmit={submitHandler}>
                                <h1 className="mb-3">Profil użytkownika</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">Imie</label>
                                    <input
                                        type="text"
                                        id="name_field"
                                        className="form-control"
                                        name='name'
                                        value={name}
                                        onChange={onChange}
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email_field">E-mail</label>
                                    <input
                                        type="email"
                                        id="email_field"
                                        className="form-control"
                                        name='email'
                                        value={email}
                                        onChange={onChange}
                                        disabled 
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="password_field">Hasło</label>
                                    <input
                                        type="password"
                                        id="password_field"
                                        className="form-control"
                                        name='password'
                                        value={password}
                                        onChange={onChange}
                                    />
                                </div>
                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    disabled={updateLoading ? true : false}
                                >
                                    {updateLoading ? <ButtonLoader /> : 'Zapisz zmiany'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Profile
