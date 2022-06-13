import axios from "axios"
import { useEffect, useState } from "react"
import { access_token, baseUrl, imageBaseUrl } from "../constant"
import { Link } from 'react-router-dom';
import { Card } from 'antd';

const { Meta } = Card;

const PopularList = () => {
    const [popularList, setPopularList] = useState([])

    useEffect(() => {
        if(popularList.length === 0) {
            axios.get(baseUrl + "movie/popular", {
                headers: {
                    "Authorization": `Bearer ${access_token}`
                }
            })
            .then(function (response) {
                // handle success
                setPopularList(response.data.results)
                console.log("popularList",response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
        }

    },[popularList])

    return(
        <>
         <div className='mt-10 '>
                <h1 className='text-2xl font-bold'>Popüler Filmler</h1>
                <div className='mt-10  flex overflow-x-auto h-[500px]'>
                    {
                        popularList.map((element) => {
                            return (
                                <Link to={`detail/${element.id}`} key={element.id}>
                                    <Card
                                        hoverable className='w-[200px] h-[200px] ml-5'
                                        cover={<img alt="example" className='w-[200px] min-w-[200px] h-[200px] object-cover' src={imageBaseUrl + element.poster_path} />}

                                    >
                                        <Meta title={element.title} description={element.overview.slice(0, 150)} />
                                        

                                    </Card>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )

}

export default PopularList