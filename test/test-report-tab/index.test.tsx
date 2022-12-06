// Imports
import '@testing-library/jest-dom/extend-expect'
import {
    fireEvent,
    render,
    screen,
    waitFor,
    waitForElementToBeRemoved
} from '@testing-library/react';
import React from 'react';

import TestReportTab from '../../src/test-report-tab/index';

describe('TestReportTab', () => {

    test('rendering', () => {

        const { container } = render(<TestReportTab />);
        const title = container.querySelector('h1');
        console.info('title', title?.outerHTML);

        expect(title).toBeTruthy();

    });

});