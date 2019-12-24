import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ChartJs from 'chart.js';

import { getChartValuesByButton } from '../store/selectors';
import { createChartConfig } from '../utils/chart';

const ChartStyled = styled.div`
    max-width: 800px;
    height: 800px;
    margin: 3rem auto 0 auto;
`;

export const Chart = () => {
    const chartRef = useRef();
    const { dates, values } = useSelector(getChartValuesByButton);
    const config = createChartConfig({ dates, values });

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        const chart = new ChartJs(ctx, config);

        return () => chart.destroy();
    }, [config]);

    return (
        <ChartStyled>
            <canvas ref={chartRef} width='400' height='400' />
        </ChartStyled>
    );
};
