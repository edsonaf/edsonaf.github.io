import { IconButton } from "@mui/material";
import React, { useState } from "react";
import useMediaQuery from "../../utilities/UseMediaQuery";
import saint from "../../../../favicon.svg"
import "./DarkModeToggle.scss";

export default function DarkModeToggle() {
  const systemPrefersDark = useMediaQuery(
    "(prefers-color-scheme: dark)",
    undefined,
    (isSystemDark) => setIsDark(isSystemDark)
  );

  const [isDark, setIsDark] = useState(systemPrefersDark);
  // const lightThemeImage = "/wings_64.png";

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
      <img src={saint} alt="logo" />
    </IconButton>
  );
}
