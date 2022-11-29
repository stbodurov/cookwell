import styled from "@emotion/styled";
import { CircularProgress } from "@mui/material";

const LoadingSpinner = styled(CircularProgress)(() => ({
  ".MuiCircularProgress-root": {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    margin: "auto",
    width: "200px",
  },
}));

export default LoadingSpinner;
