import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { access_token, baseUrl, imageBaseUrl } from '../constant';
import { useNavigate, Link } from "react-router-dom";
import { Row, Col, Spin, Progress, Card, Carousel} from 'antd';
import Header from '../header';
import { ArrowLeftOutlined,ArrowRightOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Detail = () => {
    let { id } = useParams();
    let navigate = useNavigate();

    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true)
    const [similar, setSimilar] = useState([])
    // /movie/id/similar?language=tr-TR

    const getMovieById = () => {
        axios.get(baseUrl + "/movie/" + id, {
            headers: {
                "Authorization": `Bearer ${access_token}`
            }
        })
            .then((response) => {
                setMovie(response.data)
                setLoading(false)

            })
            .catch(() => {
                navigate("/404")

            })
    }

    const getSimilarList = () => {
        axios.get(baseUrl + "/movie/" + id + "/similar?language=tr-TR", {
            headers: {
                "Authorization": `Bearer ${access_token}`
            }
        })
            .then((response) => {
                setSimilar(response.data.results)

            })
    }

    useEffect(() => {
        if (Object.keys(movie).length === 0) {
            getMovieById()
            getSimilarList()

        }
    })
    const settings = {
        dots:true,
        infinite:true,
        speed:500,
        slidesToShow: 4.5,  
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props
        return (
            <div
            className={className}
            style={{ ...style, display: "block"}}
            onClick={onClick}
            ><ArrowLeftOutlined style={{ fontSize: '16px', color: '#08c' }}/></div>
            )
        }
    
        function SampleNextArrow(props) {
            const { className, style, onClick } = props
            return (
                <div
                className={className + " text-black"}
                style={{ ...style, display: "block" }}
                onClick={onClick}
                ><ArrowRightOutlined style={{ fontSize: '16px', color: '#08c' }}/></div>
            )
        }
    
    if (loading) {
        return (
            <div>
                <Spin />

            </div>
        )
    }
    console.log(similar)
    return (
        <>
            <div>
                <Header />
                <Row className='relative '>
                    <Col span={24} className='movie-back-drop' >
                        <img src={imageBaseUrl + movie.backdrop_path} alt="backdrop_path" className='w-full h-[640px]' />
                    </Col>
                    <Col span={24} className='absolute z-10'>
                        <Row>
                            <Col span={8} className='p-10'>
                                <img src={imageBaseUrl + movie.poster_path} alt="poster_path" className='w-full' />
                            </Col>
                            <Col span={16} className='text-white p-10'>
                                <h3 className='text-white text-2xl'>{movie.title}</h3>
                                <div className='my-4'>
                                    {movie.genres.map((element) => {
                                        return (
                                            <span key={element.id} >{element.name}</span>
                                        )
                                    })}
                                    <span > {movie.runtime} mn</span>
                                </div>

                                <div>
                                    <Progress type="circle" width={50} percent={movie.vote_average * 10} />
                                    <span className='ml-3' >Üye Puanı</span>
                                </div>
                                <div className='my-4'>

                                    <h4 className='text-white' >Özet</h4>
                                    <p>{movie.overview}</p>
                                </div>





                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className='slider-area w-full my-5 '>
                    <h3>Benzer Filmler</h3>
                    <Carousel {...settings}   arrows={true} draggable={true}>
                        {
                            similar.map((element) => {
                                return (
                                    <div key={element.id} className='h-[378px]'>
                                        <Link to={`detail/${element.id}`} >
                                            <Card
                                                hoverable className='w-11/12 ml-5 h-full'
                                                cover={<img alt="example" className='w-full min-w-[200px] h-[200px] object-cover' src={imageBaseUrl + element.poster_path} />}
                                            >
                                                <Meta title={element.title} description={element.overview.slice(0, 150) +' ...'} />

                                            </Card>
                                        </Link>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </div>
            </div>
        </>
    )
}

export default Detail