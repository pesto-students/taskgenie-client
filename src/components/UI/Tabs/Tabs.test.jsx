import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Tabs from './Tabs';
import Tab from '../Tab/Tab'

describe("Tabs", () => {
    it("should render a tab", () => {
        render(<Tabs value={0} data-testid='tabs'>
            <Tab label="Quotes" value={0} />
            <Tab label="Comments" value={1} />
        </Tabs>);
        expect(screen.getByTestId('tabs')).toBeInTheDocument();
    })

})