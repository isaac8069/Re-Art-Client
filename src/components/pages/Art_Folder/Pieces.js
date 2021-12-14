
const Pieces = (props) => {

    return (
        <div>
            <h2>{props.title}</h2>
            <h4>Artist: {props.artist}</h4>
            <h5>Price: ${props.price}</h5>
            <img src={props.imgUrl}></img>
            <p>Description: {props.description}</p>
        </div>
    )
}

export default Pieces