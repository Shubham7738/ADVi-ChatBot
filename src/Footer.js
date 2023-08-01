import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <div className="footer">
      <Box
        lg={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          p: 6,
        }}
        component="footer"
      >
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            marginTop={2.7}
          >
            {"This is a Demo powered by Genzeon "}

            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
