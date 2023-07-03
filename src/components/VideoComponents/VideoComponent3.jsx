import { Text } from "@chakra-ui/react";
import React from "react";
import ReactPlayer from "react-player";

const VideoComponent3 = ({ url }) => {
  return (
    <div
      style={{
        width: "80%",
        margin: "50px auto",
        display: "flex",
        justifyContent: "space-around",
        // alignItems: "center",
        gap: "20px",
      }}
      data-aos="fade-down-right"
    >
      <div
        style={{
          width: "40%",
          height: "250px",
          position: "relative",
          // 16:9 aspect ratio (divide the height by width and multiply by 100 to get the percentage)
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReactPlayer width="100%" height="100%" controls={true} url={url} />
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
        }}
      >
        <Text fontSize={{ base: "10px", sm: "12px", md: "14px", lg: "16px" }}>
          Nature helps calm your nerves, as the tranquility of the outdoors is
          much better for your brain than loud, fast, urban environments. Find a
          bench in an easy-to-reach location and take some time to simply sit
          and relax in nature. The Metolius Preserve has some great benches and
          viewing platforms that are perfect for contemplation and relaxation.
        </Text>
      </div>
    </div>
  );
};

export default VideoComponent3;
