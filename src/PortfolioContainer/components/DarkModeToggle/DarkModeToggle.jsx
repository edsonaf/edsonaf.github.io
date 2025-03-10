import { IconButton } from "@mui/material";
import React, { useState } from "react";
import useMediaQuery from "../../utilities/UseMediaQuery";
import "./DarkModeToggle.scss";

export default function DarkModeToggle() {
  const systemPrefersDark = useMediaQuery(
    "(prefers-color-scheme: dark)",
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  const [isDark, setIsDark] = useState(systemPrefersDark);
  // const lightThemeImage = "/wings_64.png";
  const darkThemeImage = "/favicon.svg";

  // useEffect(() => {
  //   if (isDark) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, [isDark]);

  return (
    // TODO: use SVG's instead of png
    <IconButton
      onClick={() => console.log("Dark mode is turned off...")}
      size="large"
      className="dark-mode-container">
      <img src={darkThemeImage} alt="logo missing" />
    </IconButton>
  );
}
