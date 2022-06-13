import Cards from "../cards"
import Header from "../header"
import PopularList from "../popularList"
import Slider from "../slider"

const Home = () => {
    return (
        <>
            <Header />
            <Slider/>
            <Cards/>
            {/* <TrendingList/> */}
            <PopularList/>
        </>
    )

}

export default Home
