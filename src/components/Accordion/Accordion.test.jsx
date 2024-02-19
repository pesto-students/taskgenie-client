import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Accordion from './Accordion';
import AccordionSummary from '../AccordionSummary';
import AccordionDetails from '../AccordionDetails';

describe('Accordion', () => {
    it('should render', () => {
        render(<Accordion elevation={0} role='accordion'>
            <AccordionSummary
                aria-controls="panel1-content"
            >
                Accordion 1
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
        </Accordion>);
        expect(screen.getByRole('accordion')).toBeInTheDocument();

    });
});