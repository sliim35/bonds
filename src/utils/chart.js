export const createChartConfig = ({ dates = [], values = [] }) => {
    const config = {
        type: 'line',
        data: {
            labels: dates,
            datasets: [
                {
                    label: 'USDL34SDFG652FFD',
                    backgroundColor: '#b3d8ff',
                    borderColor: '#007bff',
                    data: values,
                    fill: false
                }
            ]
        },
        options: {
            title: {
                display: true,
                text: 'NII CAPITAL'
            }
        }
    };

    return config;
};
