
const Pieces = (props) => {

    const imgStyle = {
        width: '500px'
    }
    return (
        <div>
            <h2>{props.title}</h2>
            <h4>Artist: {props.artist}</h4>
            <h5>Price: ${props.price}</h5>
            <img style={imgStyle} src={props.imgUrl}></img>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Pieces