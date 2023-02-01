import cbeLogo from './img/cbe-logo-small.png';

const Header = () => {

    return (
        <header style={{
            backgroundColor: 'rgb(17,121,175)',
            color: '#fff'
        }}>
            <img src={cbeLogo} alt="cbeLogo" />
            <h2>CBE Infectious Aerosol Mitigation Tool</h2>
        </header>
    )
}

export default Header