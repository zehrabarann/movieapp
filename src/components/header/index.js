import { Col, Row, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../asset/logo.svg"
import Search from '../search';
// import test from "../../asset/logo.svg" imagler böyle import edilir

const Header = (property) => {

    


    return (
        <>
            <Row justify="center" className="p-4 bg-slate-200">
                <Col span={4}>
                    <Link to="/">
                        <Logo />
                    </Link>

                    {/* <img src={test} alt="logo"/> */}
                </Col>
                <Col span={8}>
                    <Search/>

                </Col>
                <Col span={4} className="flex justify-center">
                    <Rate allowHalf defaultValue={5} />
                </Col>
            </Row>
        </>
    )

}

export default Header