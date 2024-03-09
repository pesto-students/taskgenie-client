import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Slider from "./Slider";

describe("Slider", () => {
  it("renders slider", () => {
    render(<Slider />);
    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();
  });
  it("renders with correct value", () => {
    render(<Slider value={100} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveValue("100");
  });
});
