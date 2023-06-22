import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";

import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      justifyContent: "space-between",
      p: "10px",
    }}
  >
    <Link style={{ display: "flex" }}>
      <img src={logo} alt="logo" height={40} />
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
