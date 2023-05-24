import { useState,useEffect } from "react"
import { storage } from "./firebase/firebase"
import { getDownloadURL, listAll, ref, uploadBytes,list } from "firebase/storage";
import {v4} from "uuid"

function App() {
  const [imageList,setImageList]=useState([])
  const [imageUpload, setImageUpload] = useState(null)
  
const imageListRef=ref(storage,"images/")

  const uploadImage = () => {
    if (imageUpload == null) return
    
       const imageRef = ref(storage, `images/${v4()}-${imageUpload && imageUpload.name}`);
    console.log(imageRef,"Erufgv")
    
    uploadBytes(imageRef, imageUpload).then((snaphsot) => {
      getDownloadURL(snaphsot.ref).then((url) => {
        setImageList((prev) => [...prev,url])
      })
    })
  }

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url => {
          setImageList((prev) => [...prev,url])
        }))
      })
    })
  },[])

  

 

  return (
    <div >
      <input type="file" multiple onChange={(e)=>setImageUpload(e.target.files[0])}/>  
      <button onClick={uploadImage}>Upload</button>

      {imageList.map((url, i) => {
        console.log(url,"hgfgho")
        return <img src=" https://firebasestorage.googleapis.com/v0/b/upload-e26b2.appspot.com/o/images%2Fcamera2.png6f5c60d3-4788-49e6-a374-41d03a0eeb69?alt=media&token=080dd6d9-c5ea-467b-831f-5db3ea811e49"
          alt="no" key={i} />
      })}
     
    </div>
  );
}

export default App;
