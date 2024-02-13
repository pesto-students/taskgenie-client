import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TextField from './TextField';

describe("TextField", () => {
    it("should render a TextField component", () => {
        render(<TextField />)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    });
    it("should render a TextField with custom props", () => {
        render(<TextField placeholder="this is placeholder" label="this is label" value='this is value' />)
        expect(screen.getByPlaceholderText('this is placeholder')).toBeInTheDocument()
        expect(screen.getByLabelText('this is label')).toBeInTheDocument()
        expect(screen.getByDisplayValue('this is value')).toBeInTheDocument()
    })

})