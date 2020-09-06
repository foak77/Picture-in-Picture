const videoElement = document.getElementById("video");
const button = document.getElementById("button");

// PROMPT THE USER TO SELECT  MEDIA STREAM, PASS IT TO THE VIDEO ELEMENT AND PLAY

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    console.log("Something went wrong here at:", error);
  }
}

button.addEventListener("click", async () => {
  // DISABLE THE BUTTON
  button.disable = true;
  // START PICTURE IN PICTURE
  await videoElement.requestPictureInPicture();
  // RESET THE BUTTON
  button.disable = false;
});

selectMediaStream();
