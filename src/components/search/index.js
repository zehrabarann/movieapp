import { useState } from "react"
import { Input,Card } from "antd"
import axios from "axios"
import { access_token, baseUrl, imageBaseUrl } from "../constant"
import { Link } from "react-router-dom";

const { Meta } = Card;

const { Search } = Input

const SearchComponent = () => {

    const [searchResult, setSearchResult] = useState([])

    const onSearch = (e) => {
        console.log(e.target.value);
        axios.get(baseUrl + "search/movie?language=tr-TR&page=1&include_adult=false&query=" + e.target.value, {
            headers: {
                "Authorization": `Bearer ${access_token}`
            }
        })
            .then((response) => {
                setSearchResult(response.data.results)

                console.log(response.data.results)
            })
    }

    return (
        <>
            <div>
                <Search placeholder="input search text" className="w-full" onChange={onSearch} />
                {searchResult.length !== 0 &&
                    <div className="search-result">
    {
                        searchResult.map((element) => {
                            return (
                                <Link to={`detail/${element.id}`} key={element.id}>
                                    <Card
                                        hoverable className='w-[200px] h-[200px] ml-5'
                                        cover={<img alt="example" className='w-[200px] min-w-[200px] h-[200px] object-cover' src={imageBaseUrl + element.poster_path} />}
                                    >
                                        <Meta title={element.title} description={""} />

                                    </Card>
                                </Link>
                            )
                        })
                    }
                    </div>
                }
            </div>

        </>
    )
}

export default SearchComponent