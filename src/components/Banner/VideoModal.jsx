import React, { useState } from 'react';

function VideoModal() {
  const videoURL = "https://www.youtube.com/embed/slLieSoLw2M?si=B0_evrj4aBR6Tm_G";
  const [url, setUrl] = useState(videoURL);

  const handleClose = () => {
    setUrl('');
    setTimeout(() => setUrl(videoURL), 100);
  };

  return (
    <div className="video">
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl h-auto p-0">
          <iframe
            className="w-full h-[500px]"
            src={url}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={handleClose}>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default VideoModal;
