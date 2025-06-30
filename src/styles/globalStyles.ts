import { StyleSheet } from "react-native";
import { theme } from "./theme";

export const globalStyles = StyleSheet.create({
  // Layouts
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  spaceBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // Cards and surfaces
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    ...theme.shadows.sm,
  },

  // Buttons
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.md,
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonSecondary: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.surface,
    fontSize: 16,
    fontWeight: "600",
  },
  buttonTextSecondary: {
    color: theme.colors.primary,
  },

  // Typography
  h1: {
    ...theme.typography.h1,
    color: theme.colors.text,
  },
  h2: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },
  h3: {
    ...theme.typography.h3,
    color: theme.colors.text,
  },
  body: {
    ...theme.typography.body,
    color: theme.colors.text,
  },
  caption: {
    ...theme.typography.caption,
    color: theme.colors.textSecondary,
  },
  small: {
    ...theme.typography.small,
    color: theme.colors.textSecondary,
  },

  // Form elements
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: theme.borderRadius.md,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    fontSize: 16,
    backgroundColor: theme.colors.surface,
  },
  inputError: {
    borderColor: theme.colors.error,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  errorText: {
    color: theme.colors.error,
    fontSize: 14,
    marginTop: theme.spacing.xs,
  },

  // Spacing utilities
  mt: { marginTop: theme.spacing.md },
  mb: { marginBottom: theme.spacing.md },
  ml: { marginLeft: theme.spacing.md },
  mr: { marginRight: theme.spacing.md },
  mx: { marginHorizontal: theme.spacing.md },
  my: { marginVertical: theme.spacing.md },

  pt: { paddingTop: theme.spacing.md },
  pb: { paddingBottom: theme.spacing.md },
  pl: { paddingLeft: theme.spacing.md },
  pr: { paddingRight: theme.spacing.md },
  px: { paddingHorizontal: theme.spacing.md },
  py: { paddingVertical: theme.spacing.md },
});
