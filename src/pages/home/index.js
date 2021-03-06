import Cards from "../../components/cards"
import Header from "../../components/header"
import PopularList from "../../components/popularList"
import Slider from "../../components/slider"
import { useEffect, useState } from 'react';
import { access_token, baseUrl } from '../../constant';
const axios = require('axios');

const Home = () => {

    const [movieList, setMovieList] = useState([])

    useEffect(() => {
        if (movieList.length === 0) {
            axios.get(baseUrl + "movie/upcoming", {
                headers: {
                    "Authorization": `Bearer ${access_token}`
                }
            })
                .then(function (response) {
                    // handle success
                    setMovieList(response.data.results)
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }

    }, [movieList])


    return (
        <>
            <Header />
            <Slider/>
            <Cards data={movieList} title="Vizyona Girecek Filmler"/>
            <PopularList/>
        </>
    )

}

export default Home
