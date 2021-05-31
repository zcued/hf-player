class Fullscreen {
  request(elm) {
    if (elm.requestFullscreen) {
      elm.requestFullscreen();
    } else if (elm.webkitRequestFullscreen) {
      elm.webkitRequestFullscreen();
    } else if (elm.mozRequestFullScreen) {
      elm.mozRequestFullScreen();
    } else if (elm.msRequestFullscreen) {
      elm.msRequestFullscreen();
    }
  }

  exit() {
    const _document: any = document;
    if (_document.exitFullscreen) {
      _document.exitFullscreen();
    } else if (_document.webkitExitFullscreen) {
      _document.webkitExitFullscreen();
    } else if (_document.mozCancelFullScreen) {
      _document.mozCancelFullScreen();
    } else if (_document.msExitFullscreen) {
      _document.msExitFullscreen();
    }
  }

  get isBrowserFullScreen() {
    const _document: any = document;
    return (
      _document.fullscreenElement ||
      _document.webkitFullscreenElement ||
      _document.mozFullScreenElement ||
      _document.msFullscreenElement
    );
  }

  addEventListener(callback) {
    document.addEventListener("fullscreenchange", callback);
    document.addEventListener("webkitfullscreenchange", callback);
    document.addEventListener("mozfullscreenchange", callback);
    document.addEventListener("MSFullscreenChange", callback);
  }

  removeEventListener(callback) {
    document.removeEventListener("fullscreenchange", callback);
    document.removeEventListener("webkitfullscreenchange", callback);
    document.removeEventListener("mozfullscreenchange", callback);
    document.removeEventListener("MSFullscreenChange", callback);
  }
}

export default new Fullscreen();
