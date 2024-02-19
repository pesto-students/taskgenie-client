import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card from './Card';
describe('card', () => {
    it('should render', () => {
        render(<Card>This is card</Card>);
        expect(screen.getByText('This is card')).toBeInTheDocument()
    });
})