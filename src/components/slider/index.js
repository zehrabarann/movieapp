import { Carousel } from 'antd';
import image1 from "../../asset/image.jpeg"
import image2 from "../../asset/image2.jpeg"
const Slider = () => {
    return (
        <>
            <Carousel autoplay>
                <div>
                    <img src={image1} alt="wallpaper"/>
                </div>
                <div>
                    <img src={image2} alt="wallpaper"/>
                </div>
             
            </Carousel>
        </>

    )
}

export default Slider