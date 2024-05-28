import React from "react";
import { render, screen } from "@testing-library/react";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  // Test that App renders without crashing
  it("renders without crashing", () => {
    render(<Notifications />);
  });

  // Verify that App renders a div with the class App-header
  it("renders a div with the class App-header", () => {
    render(<Notifications />);
    expect(screen.getByText("Here is the list of notifications")).toBeInTheDocument();
  });
});
