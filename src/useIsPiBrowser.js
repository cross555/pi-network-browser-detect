import { useEffect, useState } from "react";

const useIsPiBrowser = () => {
  const [isInPiBrowser, setIsInPiBrowser] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const detect = async () => {
      const timeout = new Promise((resolve) =>
        setTimeout(() => resolve("timeout"), 3000)
      );

      try {
        if (window?.Pi?.getPiHostAppInfo) {
          const result = await Promise.race([
            window.Pi.getPiHostAppInfo(),
            timeout,
          ]);

          if (!cancelled && result?.hostApp === "pi-browser") {
            setIsInPiBrowser(true);
            return;
          }
        }
      } catch (e) {
        console.warn("❌ Pi SDK detection failed", e);
      }

      // Fallback: User-Agent or Referrer
      const ua = navigator?.userAgent?.toLowerCase() || "";
      const isLikelyPi =
        ua.includes("pibrowser") || document.referrer.includes("minepi.com");

      if (!cancelled) {
        setIsInPiBrowser(isLikelyPi);
      }
    };

    detect();
    return () => {
      cancelled = true;
    };
  }, []);

  return isInPiBrowser; // true | false | null
};

export default useIsPiBrowser;