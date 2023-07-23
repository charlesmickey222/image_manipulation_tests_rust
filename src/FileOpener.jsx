import { useState, useEffect } from "react";



const FileOpener = (props) => {
  const [imageFile, setImageFile] = useState({});

  const handleChangePhoto = (evt) =>{
    try {
      setImageFile({photo: evt.target.files[0]});
    } catch (error) {
      console.log(error)
    }
  }


  return ( 
    <>
    <form>
      <input
      type="file"
      id="fileSelect"
      accept="image/*, .pdf"
      name= "photo"
      required
      onChange={handleChangePhoto()}
      />
    <button type="submit">open selected file</button>
    </form>
    </>
  );
}

export default FileOpener;