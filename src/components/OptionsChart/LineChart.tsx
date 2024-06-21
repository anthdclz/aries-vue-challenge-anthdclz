import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { ChartInstance } from '.'
import { Paper } from '@mui/material'

ChartJS.register(ArcElement, Tooltip, Legend)

const LineChart = ({ chartData, chartOptions }: ChartInstance) => {
    return (
        <Paper sx={{ bgcolor: 'rgba(255, 255, 255, 0.9)', padding: '1.5rem' }}>
            <Line
                datasetIdKey="label"
                data={chartData}
                options={chartOptions}
            />
        </Paper>
    )
}

export default LineChart
