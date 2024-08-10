import ToggleButton from "./ToggleButton";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

describe("ToggleButton", () => {
    it("Renders ToggleButton with children", () => {
        render(<ToggleButton>Post Task</ToggleButton>);
        expect(screen.getByText("Post Task")).toBeInTheDocument();
    });

    it("Calls onClick handler when clicked", () => {
        const onClickMock = vi.fn()
        render(<ToggleButton onClick={onClickMock} value="toggle">Toggle</ToggleButton>);
        fireEvent.click(screen.getByText("Toggle"));
        expect(onClickMock).toHaveBeenCalledTimes(1);
    });


});
