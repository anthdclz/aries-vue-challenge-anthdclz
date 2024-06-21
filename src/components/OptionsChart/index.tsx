import LineChart from './LineChart'
import { sampleData } from './data'
import { calculateOptionRiskReward } from '../../utils/calculateOptionRiskReward'
import { LineChartData } from '../../utils/model'
import { Box, Button, Paper } from '@mui/material'
import EditOptionsDialog from './EditOptionsDialog'
import { useContext, useEffect } from 'react'
import { OptionsChartContext } from '../../context/OptionsChartProvider'

export interface ChartInstance {
    chartData: LineChartData
    chartOptions: any
}

const chartInstanceInit: ChartInstance = {
    chartData: {
        labels: [],
        datasets: [],
    },
    chartOptions: {
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 1.78,
        scales: {
            x: {
                type: 'linear',
                title: {
                    display: true,
                    text: 'Price at Expiry ($)',
                    color: 'black',
                },
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                },
            },
            y: {
                title: {
                    display: true,
                    text: 'Profit/Loss ($)',
                    color: 'black',
                },
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                },
                ticks: {
                    callback: function (value: number) {
                        return value
                    },
                },
            },
        },
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                        weight: 'bold',
                    },
                    color: 'black',
                },
            },
            tooltip: {
                enabled: true,
            },
        },
        animation: {
            duration: 1000,
            easing: 'easeInOutQuad',
        },
    },
}

const OptionsChart = () => {
    const { setOptionsData, setSelectedOption, setIsEditOptionsDialogOpen } =
        useContext(OptionsChartContext)

    const allOptions: ChartInstance[] = []
    sampleData.forEach((opt) => {
        const option = calculateOptionRiskReward(opt)
        const newChart: ChartInstance = {
            chartData: {
                labels: option.labels,
                datasets: option.datasets,
            },
            chartOptions: chartInstanceInit.chartOptions,
        }
        allOptions.push(newChart)
    })

    const handleEditOptionsDialogOpen = (chartId: number) => {
        setSelectedOption(chartId)
        setIsEditOptionsDialogOpen(true)
    }

    useEffect(() => {
        setOptionsData(sampleData)
    }, [])

    return (
        <>
            <div>
                <div>
                    <h2>Risk & Reward Analysis</h2>
                </div>
                <Paper
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        flexWrap: 'wrap',
                        bgcolor: 'rgba(255, 255, 255, 0.10)',
                        padding: '1.5rem',
                    }}
                >
                    {allOptions.map((chartInstance) => {
                        const tempId = chartInstance?.chartData?.datasets[0]?.id

                        return (
                            <Box
                                key={tempId}
                                sx={{
                                    padding: '3rem 2rem',
                                    width: '45%',
                                }}
                            >
                                <LineChart {...chartInstance} />
                                <Box sx={{ padding: '1rem 0', width: '100%' }}>
                                    <Button
                                        variant="contained"
                                        onClick={() =>
                                            handleEditOptionsDialogOpen(tempId)
                                        }
                                    >
                                        Edit this option
                                    </Button>
                                </Box>
                            </Box>
                        )
                    })}
                </Paper>
                <EditOptionsDialog />
            </div>
        </>
    )
}

export default OptionsChart
