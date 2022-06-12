import { Col, Row, Input, Rate } from 'antd';
import { ReactComponent as Logo } from "../../asset/logo.svg"
// import test from "../../asset/logo.svg" imagler böyle import edilir
const { Search } = Input;

const Header = (property) => {

    const onSearch = (value) => console.log(value);


    return (
        <>
            <Row justify="center" className="p-4 bg-slate-200">
                <Col span={4}>
                    <Logo />
                    {/* <img src={test} alt="logo"/> */}
                </Col>
                <Col span={8}>
                    <Search placeholder="input search text" className="w-full" onSearch={onSearch} />

                </Col>
                <Col span={4} className="flex justify-center">
                    <Rate allowHalf defaultValue={5} />
                </Col>
            </Row>
        </>
    )

}

export default Header