import styled from "@emotion/styled";
import {
  Box,
  Dialog,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
}));

const InstructionDialog = ({
  open,
  handleClose,
  instructions,
}: InstructionDialogProps) => (
  <BootstrapDialog
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <IconButton
      aria-label="close"
      onClick={handleClose}
      sx={{
        position: "absolute",
        right: 4,
        top: 4,
      }}
    >
      <CloseIcon />
    </IconButton>
    <DialogContent sx={{ gap: "30px" }}>
      {instructions.map(({ step, text }) => (
        <Box key={step} sx={{ display: "flex", gap: "10px" }}>
          <Box
            component="span"
            sx={{
              width: "35px",
              height: "35px",
              backgroundColor: "#3593e9",
              borderRadius: "25px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              color: "white",
            }}
          >
            <Typography>{step}</Typography>
          </Box>
          <Typography>{text}</Typography>
        </Box>
      ))}
    </DialogContent>
  </BootstrapDialog>
);

export default InstructionDialog;
