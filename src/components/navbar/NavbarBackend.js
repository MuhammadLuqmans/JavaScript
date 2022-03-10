// React
import { useContext } from "react";
import { useTranslation } from "react-i18next";

// MUI
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  styled,
  useMediaQuery,
} from "@mui/material";
import { Brightness4 } from "@mui/icons-material";

// Contexts
import { SettingsContext } from "../../contexts/SettingsContext";
import { TitleContext } from "../../contexts/TitleContext";

// Config
import { THEMES } from "../../constants";

import FlexBox from "../layout/FlexBox";
import { H2 } from "../layout/Typography";

import LanguagePopover from "./LanguagePopover";
import ProfilePopover from "./ProfilePopover";
import NotificationsPopover from "./NotificationsPopover";

import ThemeIcon from "../../icons/AddressBook";

// custom styled components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  zIndex: 11,
  boxShadow: "none",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  paddingTop: "0.5rem",
  paddingBottom: "0.5rem",
  backdropFilter: "blur(6px)",
  backgroundColor: theme.palette.secondary.light,
}));

const StyledToolBar = styled(Toolbar)(() => ({
  "@media (min-width: 0px)": {
    paddingLeft: 0,
    paddingRight: 0,
    minHeight: "auto",
  },
}));

const StyledIconButton = styled(IconButton)(() => ({
  "&:hover": {
    backgroundColor: "transparent",
  },
}));

// root component
const NavbarBackend = () => {
  const { t } = useTranslation();
  const { title } = useContext(TitleContext);
  const { settings, saveSettings } = useContext(SettingsContext);

  const downSm = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const handleChangeTheme = (theme) => {
    saveSettings({ ...settings, theme });
  };

  if (downSm) {
    return (
      <>
        <StyledAppBar position="sticky">
          <StyledToolBar>
            <Box flexGrow={1} textAlign="center">
              <img
                src="/static/logo/logo.svg"
                width="100%"
                height="30"
                alt="Logo"
              />
            </Box>

            {settings.theme === "light" ? (
              <StyledIconButton
                disableRipple
                onClick={() => handleChangeTheme(THEMES.DARK)}
              >
                <ThemeIcon />
              </StyledIconButton>
            ) : (
              <StyledIconButton
                disableRipple
                onClick={() => handleChangeTheme(THEMES.LIGHT)}
              >
                <Brightness4 />
              </StyledIconButton>
            )}

            <LanguagePopover />
            <NotificationsPopover />
            <ProfilePopover />
          </StyledToolBar>
        </StyledAppBar>
      </>
    );
  }

  return (
    <StyledAppBar position="sticky">
      <StyledToolBar>
        <H2
          fontSize={21}
          lineHeight={0}
          mx={1}
          fontWeight="700"
          color="text.primary"
        >
          {t(title)}
        </H2>

        <Box flexGrow={1} ml={1} />

        {settings.theme === "light" ? (
          <StyledIconButton
            disableRipple
            onClick={() => handleChangeTheme(THEMES.DARK)}
          >
            <ThemeIcon />
          </StyledIconButton>
        ) : (
          <StyledIconButton
            disableRipple
            onClick={() => handleChangeTheme(THEMES.LIGHT)}
          >
            <Brightness4 />
          </StyledIconButton>
        )}

        <LanguagePopover />
        <NotificationsPopover />
        <ProfilePopover />
      </StyledToolBar>
    </StyledAppBar>
  );
};

export default NavbarBackend;
