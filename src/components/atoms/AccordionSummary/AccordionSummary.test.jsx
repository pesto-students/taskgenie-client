import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import AccordionSummary from './AccordionSummary';

describe('AccordionSummary', () => {
    it('should render', () => {
        render(<AccordionSummary>
            Accordion Summary
        </AccordionSummary>);
        expect(screen.getByText('Accordion Summary')).toBeInTheDocument();
    }
    )
});
