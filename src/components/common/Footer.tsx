import { Typography } from "@mui/material";

const Footer = () => (
  <footer
    style={{
      display: "flex",
      justifyContent: "center",
      padding: "1.5rem",
      borderTopLeftRadius: "5px",
      borderTopRightRadius: "5px",
      boxShadow: "0px 2px 8px 1px rgba(0,0,0,0.18)",
    }}
  >
    <Typography fontWeight={500}>
      Copyright © 2022. All rights reserved
    </Typography>
  </footer>
);

export default Footer;
