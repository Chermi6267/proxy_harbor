export const toastConfig = {
  duration: 2000,
  style: {
    background: "#1a1a1a",
    color: "#ffffff",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    borderRadius: "12px",
    padding: "16px 20px",
    fontSize: "14px",
    fontWeight: "500",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
  },
  success: {
    style: {
      background: "#1a1a1a",
      color: "#ffffff",
      border: "1px solid #4CAF50",
    },
    iconTheme: {
      primary: "#4CAF50",
      secondary: "#1a1a1a",
    },
  },
  error: {
    style: {
      background: "#1a1a1a",
      color: "#ffffff",
      border: "1px solid #f44336",
    },
    iconTheme: {
      primary: "#f44336",
      secondary: "#1a1a1a",
    },
  },
  loading: {
    style: {
      background: "#1a1a1a",
      color: "#ffffff",
      border: "1px solid #ccff00",
    },
  },
};
