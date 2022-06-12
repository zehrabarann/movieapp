import { Card } from 'antd';
import { imageBaseUrl } from '../constant';
//const axios = require('axios');
import { Switch } from 'antd';
import React from 'react';



const TrendingList = () => {
    return (
    

        <>

            <div className='mt-10 flex'>
                <h1 className='text-2xl font-bold'>Trending</h1>
                <div className='flex'>
                    
                    <Switch defaultChecked className='bg-black' />
                    <br />

                </div>
                


                <div className='mt-10  flex overflow-x-auto h-[500px]'>
                    {


                        // <Card
                        //     hoverable className='w-[200px] h-[200px] ml-5'
                        //     cover={<img alt="example" className='w-[200px] min-w-[200px] h-[200px] object-cover' src={imageBaseUrl + element.poster_path} />}
                        // >
                        //     {/* <Meta title={element.title} description={element.overview.slice(0, 150)} /> */}

                        // </Card>


                    }
                </div>
            </div>
        </>
    )
}

export default TrendingList