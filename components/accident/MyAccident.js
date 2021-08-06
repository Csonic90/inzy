import React, { useEffect } from 'react'
import Link from 'next/link'

import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { clearErrors } from '../../redux/actions/flatActions'

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

const MyAccident = () => {

    const dispatch = useDispatch()

    //const { myflats, error } = useSelector(state => state.myflats)

    // useEffect(() => {
    //     if (error) {
    //         toast.error(error);
    //         dispatch(clearErrors())
    //     }

    // }, [dispatch])
    // console.log(myflats)


    return (
        <div className='container container-fluid '>
            <div className='text-right'>

            </div>
            <h2 className='my-5'>Twoje zgłoszenia <Link href="/"><button className='btn btn-success float-right m-2'> <i className="bi bi-file-plus"></i>DODAJ ZGŁOSZENIE</button></Link> </h2>
            <MDBTable>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Nr Zgłoszenia</th>
                        <th scope='col'>Temat</th>
                        <th scope='col'>Treść</th>
                        <th scope='col'>Status</th>
                        <th scope='col'> Akcje </th>

                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <th scope='row'>1</th>
                        <td>żarówka</td>
                        <td>brak oświetlenia na klatce schodowej</td>
                        <td>Nie rozwiązany</td>
                        <td>
                            <>
                                <Link href={`/`}>
                                    <a className="btn btn-primary">
                                        <i className="fa fa-pencil"></i>
                                    </a>
                                </Link>

                                <button className="btn btn-danger mx-2">
                                    <i className="fa fa-trash"></i>
                                </button>

                            </>
                        </td>
                    </tr>
                    <tr>
                        <th scope='row'>2</th>
                        <td>wycieraczka</td>
                        <td>zużyta wycieraczka  przy bloku</td>
                        <td>rozwiązano</td>
                        <td>
                            <>
                                <Link href={`/`}>
                                    <a className="btn btn-primary">
                                        <i className="fa fa-pencil"></i>
                                    </a>
                                </Link>

                                <button className="btn btn-danger mx-2" >
                                    <i className="fa fa-trash"></i>
                                </button>

                            </>
                        </td>
                    </tr>
                    <tr>
                        <th scope='row'>3</th>
                        <td >ławka</td>
                        <td>połamany szczebel w ławce przy klatce nr 4B </td>
                        <td>rozwiązano</td>
                        <td>
                            <>
                                <Link href={`/`}>
                                    <a className="btn btn-primary">
                                        <i className="fa fa-pencil"></i>
                                    </a>
                                </Link>

                                <button className="btn btn-danger mx-2">
                                    <i className="fa fa-trash"></i>
                                </button>

                            </>
                        </td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
        </div>
    )
}

export default MyAccident