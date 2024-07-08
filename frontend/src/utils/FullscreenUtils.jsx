// fullscreenUtils.js
import { useState, useEffect } from "react";

const useFullscreen = () => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const requestFullscreen = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };

  const checkFullscreen = () => {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      setIsFullscreen(true);
    } else {
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", checkFullscreen);
    document.addEventListener("webkitfullscreenchange", checkFullscreen);

    // Initial check
    checkFullscreen();

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener("fullscreenchange", checkFullscreen);
      document.removeEventListener("webkitfullscreenchange", checkFullscreen);
    };
  }, []);

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      const confirmed = window.confirm(
        "Apakah Anda yakin ingin masuk ke mode fullscreen?"
      );
      if (confirmed) {
        requestFullscreen(document.documentElement);
      }
    } else {
      const confirmed = window.confirm(
        "Apakah Anda yakin ingin keluar dari mode fullscreen?"
      );
      if (confirmed) {
        exitFullscreen();
      }
    }
  };

  return { isFullscreen, toggleFullscreen };
};

export default useFullscreen;
