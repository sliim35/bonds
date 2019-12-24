import React from 'react';
import styled from 'styled-components';

import { Form } from './form';
import { Chart } from './chart';

const AppStyled = styled.div`
    max-width: 1024px;
    margin: 0 auto;
`;

export const App = () => {
    return (
        <AppStyled>
            <Form />
            <Chart />
        </AppStyled>
    );
};
