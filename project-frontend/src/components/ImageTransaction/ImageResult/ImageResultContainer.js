
import './ImageResultContainer.css'
function ImageResultContainer(props){
    let {image,extras}=props;
return(<>
    <div className="imageResultContainer">
    <img src={image} alt={extras["alt"]} />
    <h3>{extras["message"]}</h3>
    </div>
</>)
}

export default ImageResultContainer;