"use client"

import React from 'react'
import DropBox from '../components/DropBox'

const page = () => {
  return (
    <div>
        <div>
            <h1>
                Upload doc here!
            </h1>
        </div>
        <div>
            <DropBox />
        </div>
    </div>
  )
}

export default page


// const { useState } = require("react");
// const axios = require("axios");
// const fs = require("fs/promises");
// const path = require("path");
// const Link = require("next/link");

// const Home = ({ dirs }) => {
//   const [uploading, setUploading] = useState(false);
//   const [selectedImage, setSelectedImage] = useState("");
//   const [selectedFile, setSelectedFile] = useState();

//   const handleUpload = async () => {
//     setUploading(true);
//     try {
//       if (!selectedFile) return;
//       const formData = new FormData();
//       formData.append("myImage", selectedFile);
//       const { data } = await axios.post("/api/image", formData);
//       console.log(data);
//     } catch (error) {
//       console.log(error.response?.data);
//     }
//     setUploading(false);
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-20 space-y-6">
//       <label>
//         <input
//           type="file"
//           hidden
//           onChange={({ target }) => {
//             if (target.files) {
//               const file = target.files[0];
//               setSelectedImage(URL.createObjectURL(file));
//               setSelectedFile(file);
//             }
//           }}
//         />
//         <div className="w-40 aspect-video rounded flex items-center justify-center border-2 border-dashed cursor-pointer">
//           {selectedImage ? (
//             <img src={selectedImage} alt="" />
//           ) : (
//             <span>Select Image</span>
//           )}
//         </div>
//       </label>

//       <button
//         onClick={handleUpload}
//         disabled={uploading}
//         style={{ opacity: uploading ? ".5" : "1" }}
//         className="bg-red-600 p-3 w-32 text-center rounded text-white"
//       >
//         {uploading ? "Uploading.." : "Upload"}
//       </button>

//       <div className="mt-20 flex flex-col space-y-3">
//         {dirs.map((item) => (
//           <Link key={item} href={"/images/" + item}>
//             <a className="text-blue-500 hover:underline">{item}</a>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// const getServerSideProps = async () => {
//   const props = { dirs: [] };
//   try {
//     const dirs = await fs.readdir(path.join(process.cwd(), "/public/images"));
//     props.dirs = dirs;
//     return { props };
//   } catch (error) {
//     return { props };
//   }
// };

// module.exports = {
//   Home,
//   getServerSideProps,
// };
