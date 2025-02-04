import React, { useState, useEffect } from "react";
import { FeatureStory } from "../list_cards/FeatureStory";
import Carousel from "../list_cards/Carousel";
import Carousel2 from "../list_cards/Carousel2";
import { cards1, cards2, featureArr } from "../data_Arrays/data";
import { Flex, Text } from "@chakra-ui/react";

export const HomePage = () => {
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState(
    "“Mental illness… occurs when our mental health is compromised or neglected for so long that it affects our ability to function in our everyday life.“There is hope, even when your brain tells you there isn’t.”"
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 40);
    }
  }, [index]);

  return (
    <div style={{ zIndex: "-1" }}>
      <div
        style={{
          width: "100%",
          height: "550px",
          backgroundColor: "rgb(0,0,0)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            // opacity: "0.7",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundImage: `url("https://www.nshm.com/wp-content/uploads/2023/03/blog-6.jpg")`,
            display: "flex",
            padding: "150px 70px",
          }}
        >
          <Flex
            style={{
              // height: "30%",
              // border: "1px solid red",
              textAlign: "start",
            }}
            width={{ sm: "60%", md: "50%", lg: "40%" }}
          >
            <Text
              style={{
                opacity: "1",
                color: "white",
                fontWeight: "bold",
              }}
              fontSize={{ sm: "20px", md: "22px", lg: "26px" }}
            >
              {text}
            </Text>
          </Flex>
        </div>
      </div>
      <Carousel data={cards1} title={"Mental Health Problems"} />
      <FeatureStory data={featureArr} title={"Featured Videos"} />
      <Carousel2 data={cards2} title={"Mental Health Issues"} />
    </div>
  );
};
