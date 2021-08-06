import React, { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { clearErrors } from '../../redux/actions/flatActions'
import { Line, Radar, Bar, Polar, Pie, Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

const MyFlat = () => {

    const dispatch = useDispatch()

    const { myflats, error } = useSelector(state => state.myflats)

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearErrors())
        }

    }, [dispatch])
    console.log(myflats)


    const data = {
        dataLine: {
            labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
            datasets: [
                {
                    label: "Licznik gazu",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .0)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130,1 58)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [10, 11, 10, 11, 9, 8, 11]
                },
                {
                    label: "Licznik wody",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(184, 185, 210, .0)",
                    borderColor: "rgb(35, 26, 136)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(35, 26, 136)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [5, 6, 7, 5, 5, 6, 6]
                },
                {
                    label: "Licznik prądu",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(159, 10, 210, .0)",
                    borderColor: "rgb(3, 60, 136)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(35, 26, 136)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 10,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [220, 150, 140, 119, 186, 127, 190]
                }

            ]
        }
    };


    const myflatscount = (myflats?.length > 1 ?


        <div className='container container-fluid '>
            <h1 className='my-5'>Moje mieszkania</h1>
            {myflats && myflats.map(flat =>
                <div key={flat._id} className=' shadow-lg  m-5'>
                    <div className="row">

                        <div className="col"><h3 className="text-center m-3 p-2" >Adres: <b>ul. Akacjowa {flat.buldingNumber}/{flat.flatNumber}</b></h3></div>



                    </div>
                    <div className="row">
                        <div className='col text-center'> <h5 className=" m-3 " ><i class="bi bi-layout-text-sidebar"></i> Informacje podstawowe:</h5>
                            <h6 className="text-center m-3 " ><i class="bi bi-layers"></i> powierzchnia: <b>{flat.flatArea} m<sup>2</sup></b></h6>
                            <h6 className=" m-3 " ><i class="bi bi-grid-3x3-gap"></i> udział:  <b>{flat.participation}</b></h6>
                            <h6 className=" m-3 " ><i class="bi bi-people"></i> Ilość mieszkańców: <b>2 osoby</b></h6></div>

                        <div className='col text-center'> <h5 className=" m-3 " > <i class="bi bi-piggy-bank"></i> Koszt:</h5>
                            <h6 className=" m-3 " > <i class="bi bi-wallet2"></i> Aktualny czynsz: <b>408 zł</b></h6>
                            <h6 className=" m-3 " ><i class="bi bi-lightning"></i> Aktualny Koszt Energi: <b>121,54 zł</b> </h6>
                        </div>
                    </div>
                    <MDBContainer>
                        <div><h3 className="mt-5">Media <Link href='/admin/blogs/new'>
                            <a className="mt-0 btn btn-success text-white float-right m-1 mb-1 "><i className="bi bi-file-plus"></i> Podaj Gaz</a>
                        </Link>
                            <Link href='/admin/blogs/new'>
                                <a className="mt-0 btn btn-success text-white float-right m-1 mb-1 "><i className="bi bi-file-plus"></i> Podaj Wodę</a>
                            </Link>
                            <Link href='/admin/blogs/new'>
                                <a className="mt-0 btn btn-success text-white float-right m-1 mb-1 "><i className="bi bi-file-plus"></i> Podaj Energie</a>
                            </Link></h3>

                        </div>
                        <div>Aktualny stan liczników: </div>
                        <div>Gaz: <span> 308 </span> Woda: <span>120</span> Prąd: <span>182</span>

                        </div>
                        <Line data={data.dataLine} options={{ responsive: true }} />

                    </MDBContainer>
                </div>

            )}
        </div>


        :


        <div className='container container-fluid '>
            <h1 className='my-5'>Moje mieszkania</h1>
            {myflats && myflats.map(flat =>
                <div key={flat._id} className=' shadow-lg  m-5'>

                    <div>adres : {flat.buldingNumber}/{flat.flatNumber}</div>
                    <div>powierzchnia : {flat.flatArea}</div>
                    <div>udział :  {flat.participation}</div>
                    <div>Media</div>

                </div>

            )}
        </div>
    )

    return (myflatscount)


}

export default MyFlat