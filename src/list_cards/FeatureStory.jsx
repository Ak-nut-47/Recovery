import { Box, Text } from "@chakra-ui/react";
import { GridCard } from "./GridCard";
import { useState } from "react";

export const FeatureStory = ({ data, title }) => {
  const [arr] = useState(data);

  return (
    <Box>
      <Box className="p">
        <Text
          fontSize={{ sm: "20px", md: "23px", lg: "28px" }}
          fontWeight={"semibold"}
          mb={10}
          mt={10}
        >
          {title}
        </Text>
      </Box>
      <Box
        className="grid"
        display="grid"
        gridTemplateColumns={{
          sm: "1fr",
          base: "repeat(2, 1fr)",
          md: "repeat(3, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="20px"
        width="90%"
        margin="auto"
      >
        {arr.length > 0 &&
          arr.map((el, i) => {
            return <GridCard key={i} {...el} />;
          })}
      </Box>
    </Box>
  );
};
