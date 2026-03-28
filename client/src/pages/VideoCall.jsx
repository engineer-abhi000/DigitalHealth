import React, { useEffect } from "react";
import AgoraRTC from "agora-rtc-sdk-ng";

const APP_ID = "YOUR_APP_ID"; // from Agora
const CHANNEL = "test-room"; // same for doctor & patient
const TOKEN = null; // for now keep null (testing)

function VideoCall() {
  useEffect(() => {
    const initCall = async () => {
      const client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });

      await client.join(APP_ID, CHANNEL, TOKEN, null);

      const [audioTrack, videoTrack] =
        await AgoraRTC.createMicrophoneAndCameraTracks();

      await client.publish([audioTrack, videoTrack]);

      videoTrack.play("local-video");
    };

    initCall();
  }, []);

  return (
    <div>
      <h2>Video Consultation</h2>
      <div id="local-video" style={{ width: "500px", height: "400px" }}></div>
    </div>
  );
}

export default VideoCall;