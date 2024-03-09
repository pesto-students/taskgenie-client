import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import Tab from './Tab';
describe("Tab", () => {
    it("should render a tab", () => {
        render(<Tab label="Quotes" value={0} />);
        expect(screen.getByText('Quotes')).toBeInTheDocument();
    })
})