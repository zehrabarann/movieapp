import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    let navigate = useNavigate()

    return (
        <>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Button type="primary" className='text-black' onClick={() => {navigate("/")}}>Back Home</Button>}
            />
        </>

    )
}

export default NotFound