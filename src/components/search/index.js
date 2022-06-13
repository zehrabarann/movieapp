import { useState } from "react"
import { Input, Card } from "antd"
import axios from "axios"
import { access_token, baseUrl, imageBaseUrl } from "../constant"
import { Link } from "react-router-dom";
import { CloseOutlined } from '@ant-design/icons'
import { useNavigate } from "react-router-dom";

const { Meta } = Card;

const { Search } = Input



const SearchComponent = () => {

    const [searchResult, setSearchResult] = useState([])

    let navigate = useNavigate();

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

    const searchOnClose = () => {
        setSearchResult([])
    }

    const redirectReadMore = () => {
        navigate("/search-result", { replace: true, state: {searchResult:searchResult} });

    }

    return (
        <>
            <div className="w-full"> 
                <Search placeholder="input search text" className="w-full" onChange={onSearch} />
                {searchResult.length !== 0 &&
                    <div className="search-result">
                        <div className="search-header flex justify-end my-2">
                            <button onClick={searchOnClose}>
                                <CloseOutlined />
                            </button>
                        </div>
                        <ul className="grid gap-4 grid-cols-4 grid-rows-3">
                            {
                                searchResult.slice(0, 12).map((element) => {
                                    return (
                                        <Link to={`detail/${element.id}`} key={element.id}>
                                            <li>
                                                <img alt="example" className='w-full h-full object-cover' src={imageBaseUrl + element.poster_path} />
                                                <span>{element.title} </span>

                                            </li>

                                        </Link>
                                    )
                                })
                            }

                        </ul>

                        <div className="search-footer flex justify-center py-2 my-2 border-t-slate-400 border-t-2">
                            <button onClick={ redirectReadMore} >
                                Devamını Gör
                            </button>
                        </div>

                    </div>
                }
            </div>

        </>
    )
}

export default SearchComponent