import { Col, Row, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../asset/logo.svg"
import Search from '../search';
// import test from "../../asset/logo.svg" imagler böyle import edilir

const Header = () => {

    return (
        <>
            <Row justify="center" className="p-4  bg-[#032541]">
                <Col span={7} className='logo-col'>
                    <Link to="/" className='logo'>
                        <Logo />
                    </Link>
                    {/* <img src={test} alt="logo"/> */}
                </Col>
                <Col span={10} className='flex items-center search-area' xs={24} sm={10}>
                    <Search/>
                </Col>
                <Col span={7} xs={24} sm={7} className="flex mt-5 sm:mt-0 justify-center items-center text-white text-area">
                    <span>The Movie Database API</span>
                </Col>
            </Row>
        </>
    )

}

export default Header