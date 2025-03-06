import React, { useState } from 'react';

const FileManagerVideoPlayback = () => {
  const [file, setFile] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  console.log(videoUrl);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setVideoUrl(URL.createObjectURL(file));
  };

  return (
    
    <div className="file-manager-video-playback">
      <input type="file" onChange={handleFileChange} />
      {file && (
        <div className="selected-file">
            <h2>Selected File: {file.name}</h2>
            <video controls autoPlay>
                <source src={videoUrl} type="video/mp4"  />
                
            </video>
        </div>
      )}
    </div>
  );
};

export default FileManagerVideoPlayback;
