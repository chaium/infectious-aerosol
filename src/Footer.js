const Footer = () => {
    const today = new Date();

    return(
        <footer style={{
            backgroundColor: 'rgb(17,121,175)',
            color: '#fff'
        }}>
            <p>Copyright &copy; {today.getFullYear()}</p>

        </footer>
    )
}

export default Footer