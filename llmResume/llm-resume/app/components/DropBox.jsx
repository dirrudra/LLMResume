// components/DropBox.js
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DropBox = () => {
  const onDrop = useCallback(async (acceptedFiles) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('File uploaded successfully');
    } else {
      console.error('File upload failed');
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'application/pdf' });

  return (
    <div {...getRootProps({ className: 'dropbox' })} className='border-2 border-dashed border-gray-300 rounded-lg w-full h-52 flex justify-center items-center text-center text-gray-400 transition duration-200 ease-in-out focus:outline-none focus:border-gray-600'>
      <input {...getInputProps()} />
      <p>Drag & drop a PDF file here, or click to select a file</p>
      <style jsx>{`
        .dropbox {
          bg-colo

          border: 2px dashed #0070f3;
          padding: 20px;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default DropBox;
