import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from './Button';

// Tests
describe("Button", () => {
    it("renders a contained button", () => {
        render(<Button type="contained">button</Button>);
        expect(screen.getByText("button")).toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveClass("MuiButton-contained");
    });

    it("renders an outlined button", () => {
        render(<Button type="outlined">button</Button>);
        expect(screen.getByText("button")).toBeInTheDocument();
        expect(screen.getByRole("button")).toHaveClass("MuiButton-outlined");
    });
});
