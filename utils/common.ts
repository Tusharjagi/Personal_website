export function isMobileDevice() {
  if (typeof window !== undefined) {
    const userAgent = window.navigator.userAgent;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      return true;
    }
    return false;
  }
}
