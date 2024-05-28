import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  // Test that App renders without crashing
  it("renders without crashing", () => {
    render(<App />);
  });

  // Verify that App renders a div with the class App-header
  it("renders a div with the class App-header", () => {
    render(<App />);
    expect(screen.getByRole("banner")).toHaveClass("App-header");
  });

  // Verify that App renders a div with the class App-header
  it("renders a div with the class App-header", () => {
    render(<App />);
    expect(screen.getByText("School dashboard")).toBeInTheDocument();
  });

  // Verify that App renders a div with the class App-body
  it("renders a div with the class App-body", () => {
    render(<App />);
    expect(
      screen.getByText("Login to access the full dashboard :")
    ).toBeInTheDocument();
  });

  // Verify that App renders a div with the class App-body
  it("renders a div with the class App-body", () => {
    render(<App />);
    expect(screen.getByText("Email:")).toBeInTheDocument();
  });

  // Verify that App renders a div with the class App-body
  it("renders a div with the class App-body", () => {
    render(<App />);
    expect(screen.getByText("Password:")).toBeInTheDocument();
  });

  // Verify that App renders a div with the class App-footer
  it("renders a div with the class App-footer", () => {
    render(<App />);
    expect(screen.getByText("2024 - Holberton School")).toBeInTheDocument();
  });

  // Verify that App renders a div with the class App-body
  it("renders a div with the class App-body", () => {
    render(<App />);
    expect(screen.getByRole("main")).toHaveClass("App-body");
  });

  // Verify that App renders a div with the class App-footer
  it("renders a div with the class App-footer", () => {
    render(<App />);
    expect(screen.getByRole("contentinfo")).toHaveClass("App-footer");
  });
});
