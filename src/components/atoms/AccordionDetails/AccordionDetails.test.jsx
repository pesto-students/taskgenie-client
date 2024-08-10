import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AccordionDetails from './AccordionDetails';

describe('AccordionDetails', () => {
    it('should render', () => {
        render(<AccordionDetails>
            Accordion Details
        </AccordionDetails>);
        expect(screen.getByText('Accordion Details')).toBeInTheDocument();
    }
    )
});


