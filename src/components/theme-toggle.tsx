import ui from "@/data/ui.json";
import { Fragment } from "react";
import { ThemeAnimationType, useModeAnimation } from "react-theme-switch-animation";

export const ThemeToggle = () => {
  const { ref, toggleSwitchTheme, isDarkMode } = useModeAnimation({
    animationType: ThemeAnimationType.QR_SCAN,
    duration: 500,
  });

  return (
    <button ref={ref} onClick={toggleSwitchTheme} type="button" className="btn-fill w-16">
      <span>
        {isDarkMode ? (
          <Fragment>
            <span data-lang="en">{ui.theme.light.en}</span>
            <span data-lang="bn" lang="bn">
              {ui.theme.light.bn}
            </span>
          </Fragment>
        ) : (
          <Fragment>
            <span data-lang="en">{ui.theme.dark.en}</span>
            <span data-lang="bn" lang="bn">
              {ui.theme.dark.bn}
            </span>
          </Fragment>
        )}
      </span>
    </button>
  );
};
