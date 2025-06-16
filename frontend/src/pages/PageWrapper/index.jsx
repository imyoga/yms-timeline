import { Box } from "@mui/material";

export const PageWrapper = ({ children }) => {
  return <Box sx={{ border: "2px solid red", height: "100%" }}>{children}</Box>;
};
