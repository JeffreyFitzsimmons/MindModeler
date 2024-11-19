import React, { useState } from 'react';
import { Button } from '@mui/material'; // Optional for styling

export default function Home() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');
  const [uploadProgress, setUploadProgress] = useState(0);

  // Handle file selection
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;

    // Check if it's a valid .nii file
    if (selectedFile.type !== 'application/x-nifti' && !selectedFile.name.endsWith('.nii')) {
      alert('Please select a valid .nii file');
      return;
    }

    setFile(selectedFile);
    setUploadStatus('File selected: ' + selectedFile.name);
  };

  // Handle drag-and-drop file selection
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    if (droppedFile && droppedFile.name.endsWith('.nii')) {
      setFile(droppedFile);
      setUploadStatus('File selected: ' + droppedFile.name);
    } else {
      alert('Please select a .nii file.');
    }
  };

  // Handle file upload (with progress simulation)
  const handleUpload = () => {
    if (file) {
      console.log('Uploading file:', file.name);
      setUploadStatus('Uploading file: ' + file.name);

      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setUploadProgress(progress);
        if (progress >= 100) {
          clearInterval(interval);
          setUploadStatus('Upload successful: ' + file.name);
          console.log('Upload successful:', file.name);
          setFile(null);
          setUploadProgress(0);
        }
      }, 500);
    } else {
      alert('Please select a file to upload.');
    }
  };

  return (
    <div>
      <h2>Welcome to the MRI Analysis Website</h2>
      <p>This is the home page of Mind Modeler. This page will be used for the uploading of MRI scans, and the viewing of our analyzed outputs.</p>

      {/* File Upload Section */}
      <div className="file-upload">
        <div
          className="upload-area"
          onClick={() => document.getElementById('file-input').click()}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          style={{ border: '2px dashed #ccc', padding: '20px', textAlign: 'center' }}
        >
          <i className="fa fa-upload"></i>
          <p>Drag & Drop your .nii file here, or click to select</p>
        </div>

        <input
          type="file"
          id="file-input"
          accept=".nii"
          onChange={handleFileChange}
          style={{ display: 'none' }} // Hide the file input
        />
        
        {file && <p>Selected file: {file.name}</p>}
        {uploadStatus && <p>{uploadStatus}</p>}

        {/* Progress Bar */}
        {uploadProgress > 0 && (
          <div
            className="progress-bar"
            style={{
              width: `${uploadProgress}%`,
              height: '10px',
              backgroundColor: '#4caf50',
              marginBottom: '10px',
            }}
          ></div>
        )}

        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={!file || loading}
        >
          Upload
        </Button>
      </div>
    </div>
  );
}
