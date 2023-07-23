import { useState } from "react";
import "./ImageDisplay.css";


const ImageDisplay = () => {
  const [imageFilePath, setImageFilePath] = useState('placeholder-image.png');
  return ( 
    <div id="DisplayContainer">
      <img className="Display" src={imageFilePath}/>
    </div>
  );
}

export default ImageDisplay;