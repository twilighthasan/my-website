import React, { useState, useRef } from 'react';

function CameraApp() {
  const [imageSrc, setImageSrc] = useState(null);
  const videoRef = useRef(null);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const url = canvas.toDataURL('image/png');
    setImageSrc(url);
  };

  return (
    <div>
      <video ref={videoRef} autoPlay={true} />
      <button onClick={handleCapture}>Capture</button>
      {imageSrc && (
        <a href={imageSrc} download="photo.png">
          <img src={imageSrc} alt="captured" />
        </a>
      )}
    </div>
  );
}

export default CameraApp;
