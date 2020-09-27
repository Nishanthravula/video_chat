const videoGrid = document.getElementById("video_grid");
const myVideo = document.createElement("video");

let videoStream;

navigator.mediaDevices
  .getUserMedia({
    video: true,
    Audio: true,
  })
  .then((stream) => {
    videoStream = stream;
    addVideoStream(myVideo, stream);
  });

const addVideoStream = (video, stream) => {
  video.srcObject = stream;
  video.addEventListener("loadmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
};
