import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ToggleButtonGroup from './ToggleButtonGroup';
import ToggleButton from '../../../ToggleButton/ToggleButton';

describe("ToggleButtonGroup", () => {
    it("should render Toggle Button Group", () => {
        render(
            <ToggleButtonGroup >
                <ToggleButton value={'poster'}>Post Task</ToggleButton>
                <ToggleButton value={'tasker'}>Find Task</ToggleButton>
            </ToggleButtonGroup>
        );
        expect(screen.getByText("Post Task")).toBeInTheDocument();
        expect(screen.getByText("Find Task")).toBeInTheDocument();
    })
});
