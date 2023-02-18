import "./Logo.css";
import hexagono from "./hexagono.png";
import t from "./t.png";

function Logo (): JSX.Element {
    return (
        <div>
            <img src={t} alt="Logo Thalles Dev" className='header-th' />
            <img src={hexagono} alt='Logo Thalles Dev' className='header-hexa' />
        </div>
    )
}

export default Logo;