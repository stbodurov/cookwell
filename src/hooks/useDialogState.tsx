import { useState } from "react";

const useDialogState = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const toggleDialog = () => {
    setDialogOpen(!dialogOpen);
  };

  return { isDialogOpen: dialogOpen, toggleDialog };
};

export default useDialogState;
