import { locale } from "@/utils/content";
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
            <span data-lang="en">{locale.en["theme.light"]}</span>
            <span data-lang="bn" lang="bn">
              {locale.bn["theme.light"]}
            </span>
          </Fragment>
        ) : (
          <Fragment>
            <span data-lang="en">{locale.en["theme.dark"]}</span>
            <span data-lang="bn" lang="bn">
              {locale.bn["theme.dark"]}
            </span>
          </Fragment>
        )}
      </span>
    </button>
  );
};
