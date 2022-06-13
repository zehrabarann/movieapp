import { Carousel } from 'antd';
import image1 from "../../asset/image.jpeg"
import image2 from "../../asset/image1.webp"
const Slider = () => {
    return (
        <>
            <Carousel>
                <div>
                    <img src={image2} alt="wallpaper" />
                </div>
                <div>
                    <img src={image1} alt="wallpaper" />
                </div>


            </Carousel>
        </>

    )
}

export default Slider