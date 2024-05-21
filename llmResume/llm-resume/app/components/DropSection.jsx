"use client"

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

const DropSection = () => {
  const [uploading, setUploading] = useState(false);

  const onDrop = useCallback(async (acceptedFiles) => {
    const file = acceptedFiles[0];
    const formData = new FormData();
    formData.append('pdf', file);

    try {
      setUploading(true);
      await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('Error uploading file:', error);
    } finally {
      setUploading(false);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className='bg-steel-black border-neon-purple border-solid border-4 rounded-2xl'>   
      <div {...getRootProps()} style={dropzoneStyle}>
        <input {...getInputProps()} />
        {uploading ? (
          <p className='text-white'>Uploading...</p>
        ) : isDragActive ? (
          <p className='text-white'>Drop the PDF file here...</p>
        ) : (
          <p className='text-white'>Drag 'n' drop a PDF file here, or click to select a file</p>
        )}
      </div>
    </div>
  );
};

const dropzoneStyle = {
  border: '2px dashed #cccccc',
  borderRadius: '4px',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer'
};

export default DropSection;