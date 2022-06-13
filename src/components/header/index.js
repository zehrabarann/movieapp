import { Col, Row, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../asset/logo.svg"
import Search from '../search';
// import test from "../../asset/logo.svg" imagler böyle import edilir

const Header = (property) => {

    


    return (
        <>
            <Row justify="center" className="p-4  bg-[#032541]">
                <Col span={4}>
                    <Link to="/" className='logo'>
                        <Logo />
                    </Link>
                    {/* <img src={test} alt="logo"/> */}
                </Col>
                <Col span={12} className='flex items-center'>
                    <Search/>
                </Col>
                <Col span={4} className="flex justify-center items-center text-white">
                    <span>The Movie Database API</span>
                </Col>
            </Row>
        </>
    )

}

export default Header