import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { THEMES } from "../constants";

const initialSettings = {
  theme: THEMES.LIGHT,
  responsiveFontSizes: true,
};

export const SettingsContext = createContext({
  settings: initialSettings,
  saveSettings: (arg) => {},
});

// component props type
const SettingsProvider = ({ children }) => {
  const { data: settings, storeData: setSettings } = useLocalStorage(
    "settings",
    initialSettings
  );

  const saveSettings = (updateSettings) => {
    setSettings(updateSettings);
  };

  return (
    <SettingsContext.Provider
      value={{
        settings,
        saveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
