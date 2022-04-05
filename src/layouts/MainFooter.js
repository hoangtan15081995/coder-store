import { Typography, Link } from "@mui/material";

function MainFooter() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://www.coderschool.vn">
        CoderSchool
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default MainFooter;
