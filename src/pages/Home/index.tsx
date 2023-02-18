import Header from '../../components/Header';
import Principal from "./Principal";
import Sobre from "./Sobre";
import Portifolio from "./Portifolio";

const Home = () => {
    return (
        <>
            <Header />
            <Principal />
            <hr className="hr" />
            <Sobre />
            <hr className="hr" />
            <Portifolio />
        </>
    );
}

export default Home