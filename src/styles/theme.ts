export const theme = {
  colors: {
    primary: "#007AFF",
    secondary: "#5856D6",
    success: "#34C759",
    warning: "#FF9500",
    error: "#FF3B30",

    background: "#F8F9FA",
    surface: "#FFFFFF",
    card: "#FFFFFF",

    text: "#1C1C1E",
    textSecondary: "#8E8E93",
    textTertiary: "#C7C7CC",

    border: "#E5E5EA",
    separator: "#F2F2F7",
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },

  borderRadius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
  },

  typography: {
    h1: { fontSize: 32, fontWeight: "bold" as const },
    h2: { fontSize: 24, fontWeight: "bold" as const },
    h3: { fontSize: 20, fontWeight: "600" as const },
    body: { fontSize: 16, fontWeight: "normal" as const },
    caption: { fontSize: 14, fontWeight: "normal" as const },
    small: { fontSize: 12, fontWeight: "normal" as const },
  },

  shadows: {
    sm: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
      elevation: 2,
    },
    md: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      elevation: 4,
    },
  },
};

export type Theme = typeof theme;
