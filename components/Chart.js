import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const Chart = ({ chartData }) => {
    return <Line data={chartData} />;
};

export default Chart;
