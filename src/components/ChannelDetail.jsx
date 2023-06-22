import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";

const Channel = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data.item[0])
    );

    fetchFromApi(
      `search?part=snippet&channelId=${id}&order=date`
    ).then((data) => setVideos(data.items));
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0, 214, 159, 1)100%), rgba(203, 4, 234, 1) 100%",
          }}
        />
        <ChannelCard channelDetail={channelDetail} />
      </Box>

      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "100px" } }}>
          <Videos videos={videos} />
        </Box>
      </Box>
    </Box>
  );
};

export default Channel;
