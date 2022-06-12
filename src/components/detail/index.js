import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { access_token, baseUrl } from '../constant';
import { useNavigate } from "react-router-dom";

const Detail = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const [movie, setMovie] = useState({})

    useEffect(() => {
        if(Object.keys(movie).length === 0) {
            axios.get(baseUrl + "/movie/" + id, {
                headers: {
                    "Authorization": `Bearer ${access_token}`
                }
            })
            .then((response) => {
                setMovie(response)
                console.log(response)

            })
            .catch(() =>{
                navigate("/404")

            })
        }
        

    }, [movie,id,navigate])

    

    return (
        <>
        

        </>

    )
}

export default Detail