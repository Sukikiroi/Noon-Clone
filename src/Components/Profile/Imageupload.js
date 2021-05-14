import React, { useState } from 'react'
import ImageUpload from 'image-upload-react'
//important for getting nice style.
import 'image-upload-react/dist/index.css'
 
function App() {
    var currentuser = JSON.parse(localStorage.getItem("User"));
const photo = currentuser.photoURL;
const providerId = currentuser.uid;
const email = currentuser.email;
const displayName = currentuser.displayName;
 
  const [imageSrc, setImageSrc] = useState(photo)
 console.log(imageSrc)
  const handleImageSelect = (e) => {
      
    setImageSrc(URL.createObjectURL(e.target.files[0]))
   
  }
 
  return (
    <ImageUpload
      handleImageSelect={handleImageSelect}
      imageSrc={imageSrc}
      setImageSrc={setImageSrc}
      style={{
        width: 700,
        height: 500,
        background: 'gold'
      }}
    />
  )
}
 
export default App