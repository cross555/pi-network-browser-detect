# pi-network-browser-detect

A lightweight React hook to detect if your app is running inside the **Pi Browser** — perfect for hybrid Web2/Web3 Pi apps.

---

## 📦 Installation

```bash
npm install pi-network-browser-detect
```
🔍 Why Use This?
Many Pi apps are going hybrid — offering limited features in Web2 browsers and full functionality inside the Pi Browser (Web3 auth, payments, etc.).

This hook lets you:

✅ Detect the Pi Browser environment without triggering popups

🔒 Avoid premature Pi.authenticate() calls

🧩 Conditionally render features based on browser

📲 Offer QR code links or fallback UI for standard browsers

🚀 Usage

```jsx 
import useIsPiBrowser from 'pi-network-browser-detect';

const PiOnlyFeature = () => {
  const isInPiBrowser = useIsPiBrowser();

  if (isInPiBrowser === null) return null; // Still detecting

  if (isInPiBrowser === false) {
    return (
      <div>
        <p>This feature requires the Pi Browser.</p>
        <a href="https://pinet.com/YOUR_APP_LINK">Open in Pi Browser</a>
      </div>
    );
  }

  return (
    <div>
      <p>Welcome Pi user! You have full access.</p>
    </div>
  );
};
```

🧠 How It Works
✅ Tries window.Pi.getPiHostAppInfo() — the official SDK method (if available)

🌐 Fallbacks: navigator.userAgent and document.referrer

🕒 Timeout-safe and won’t break outside Pi Browser

✅ Best Practices
⚠️ Never call Pi.authenticate() on page load — wait for user action

🧩 Wrap SDK features behind isInPiBrowser checks

📲 Provide fallback UI for non-Pi users (e.g. QR code, redirect links)

## 🧪 Example

See [`/example/App.jsx`](./example/App.jsx) for a full usage demo.

```jsx
import useIsPiBrowser from 'pi-network-browser-detect';

const App = () => {
  const isInPiBrowser = useIsPiBrowser();

  if (isInPiBrowser === null) return <p>Detecting...</p>;

  return isInPiBrowser ? (
    <p>You're in the Pi Browser!</p>
  ) : (
    <p>This feature requires the Pi Browser.</p>
  );
};
```
📄 License
MIT

![npm](https://img.shields.io/npm/v/pi-network-browser-detect)
![npm downloads](https://img.shields.io/npm/dm/pi-network-browser-detect)
![license](https://img.shields.io/npm/l/pi-network-browser-detect)

Built with ❤️ by @cross555 to help Pi devs build clean hybrid apps.