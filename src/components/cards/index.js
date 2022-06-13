import { Card } from 'antd';
import { imageBaseUrl } from '../constant';
import { Link } from 'react-router-dom';
const { Meta } = Card;


const Cards = (props) => {

    if(props.data === undefined) {
        return(
            <div>
                Data Not FOund
            </div>
        )
    }

    return (
        <>
            <div className='mt-10 '>
                <h1 className='text-2xl font-bold'> {props.title}</h1>
                <div className='mt-10  flex overflow-x-auto h-[450px] py-5'>
                    {
                        props.data.map((element) => {
                            return (
                                <Link to={`detail/${element.id}`} key={element.id}>
                                    <Card
                                        hoverable bordered className='w-[200px] h-full ml-5'
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

export default Cards