import React from "react";
import "./Video.css";
import Carousel3 from "../list_cards/Carousel3";
import { NatureArr1, NatureArr2, cards3, cards4 } from "../data_Arrays/data";

import { FeatureStory } from "../list_cards/FeatureStory";
import VideoCard from "../../src/list_cards/VideoCard";
import VideoCard2 from "../../src/list_cards/VideoCard2";
import VideoComponent3 from "../components/VideoComponents/VideoComponent3";
import VideoComponentLeft from "../components/VideoComponents/VideoComponentLeft";

export const NatureSound = () => {
  return (
    <div>
      <p
        style={{
          textAlign: "left",
          margin: "2% 5%",
          fontSize: "30px",
          fontWeight: "700",
          borderBottom: "1px solid black",
        }}
      >
        Nature Sounds with Videos
      </p>
      <div style={{ width: "70%", margin: "15px auto" }}>
        <img
          src="https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHx8fDE2ODMyNjk1MDc&ixlib=rb-4.0.3&q=85"
          alt=""
          width="100%"
        />
      </div>

      {/* Video-1 */}
      <VideoComponent3 url="https://youtu.be/Qm846KdZN_c" />

      {/* Video2 */}
      <VideoComponentLeft url="https://www.youtube.com/watch?v=eNUpTV9BGac" />

      {/* Video3 */}
      <VideoComponent3 url="https://youtu.be/lE6RYpe9IT0" />

      <Carousel3 data={cards3} title={"Nature Soothing Music"} />

      <FeatureStory data={NatureArr1} title={"Featured Videos"} />
      <FeatureStory data={NatureArr2} title={"Featured Blogs"} />

      <Carousel3 data={cards4} title={"Nature Vibes"} />

      <VideoCard />
      <VideoCard2 />
      <FeatureStory data={NatureArr2} title={"Featured Blogs"} />
      <FeatureStory data={NatureArr1} title={"Featured Videos"} />
      <br />
    </div>
  );
};
