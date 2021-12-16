const Footer = ({links,data:{copyright,author}}) => {
    return (
        <footer>
            <p>{copyright} - {author}</p>
        </footer>
    )
}

export default Footer