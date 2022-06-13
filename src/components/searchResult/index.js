import { Card } from 'antd';
import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { imageBaseUrl } from '../constant';
import Header from '../header';


const { Meta } = Card;

const SearchResult = (props) => {
    const { state } = useLocation();
    const navigate = useNavigate();
    console.log(state)

    useEffect(() => {
        if (state.searchResult === undefined) {
            navigate("/404")
        }
    })

    return (
        <>
            <Header />
            <div className='grid grid-cols-5 p-5 gap-6 my-5'>
                {
                    state.searchResult.map((element) => {
                        return (
                            <Link to={`detail/${element.id}`} key={element.id}>
                                <Card
                                    hoverable className='w-full h-full'
                                    cover={<img alt="example" className='w-full h-full object-cover' src={imageBaseUrl + element.poster_path} />}
                                >
                                    <Meta title={element.title} description={element.overview.slice(0, 150)} />

                                </Card>
                            </Link>
                        )
                    })
                }

            </div>

        </>
    )
}

export default SearchResult