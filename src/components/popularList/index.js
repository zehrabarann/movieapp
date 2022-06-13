import axios from "axios"
import { useEffect, useState } from "react"
import Cards from "../cards"
import { access_token, baseUrl } from "../constant"


const PopularList = () => {
    const [popularList, setPopularList] = useState([])

    useEffect(() => {
        // Serviste sonsuz döngü kontrolü 
        if (popularList.length === 0) {
            axios.get(baseUrl + "movie/popular", {
                headers: {
                    "Authorization": `Bearer ${access_token}`
                }
            })
                .then(function (response) {
                    // handle success
                    setPopularList(response.data.results)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
        }

    }, [popularList])

    return (
        <>
            <div className='mt-10 '>
                <Cards data={popularList} title="Popüler Liste"/>
            </div>
        </>
    )

}

export default PopularList