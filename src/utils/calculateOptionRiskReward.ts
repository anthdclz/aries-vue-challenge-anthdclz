import { LineChartData, OptionItem } from './model'

export const calculateOptionRiskReward = (data: OptionItem): LineChartData => {
    const { id, type, strike_price, bid, ask, long_short } = data
    const displayLS = long_short.charAt(0).toUpperCase() + long_short.slice(1)
    const newTitle = `${displayLS} ${type}: Bid ${bid}, Ask ${ask}, Strike Price ${strike_price}`

    const startX = 75
    const endX = 125
    const prem = long_short === 'long' ? -ask : bid

    const bullishGreen = '0, 180, 0'
    const bearishRed = '180, 0, 0'
    const bullishGreenLine = `rgba(${bullishGreen}, 0.6)`
    const bullishGreenFill = `rgba(${bullishGreen}, 0.2)`
    const bearishRedLine = `rgba(${bearishRed}, 0.6)`
    const bearishRedFill = `rgba(${bearishRed}, 0.2)`

    // Bearish
    let breakEvenPrice = strike_price + prem
    let slope = -1
    let lineColor = bearishRedLine
    let fillColor = bearishRedFill
    if (
        (long_short === 'long' && type === 'Call') ||
        (long_short === 'short' && type === 'Put')
    ) {
        // Bullish
        breakEvenPrice = strike_price - prem
        slope = 1
        lineColor = bullishGreenLine
        fillColor = bullishGreenFill
    }

    let newLabels = []
    if (type === 'Call') {
        newLabels = [startX, strike_price, breakEvenPrice, endX]
    } else {
        // type === 'Put'
        newLabels = [startX, breakEvenPrice, strike_price, endX]
    }

    let newData = []
    if (type === 'Call') {
        const endY = prem + slope * (endX - strike_price)
        newData = [prem, prem, 0, endY]
    } else {
        const startY = prem + slope * (startX - strike_price)
        newData = [startY, 0, prem, prem]
    }

    const newDataSets = [
        {
            id: id,
            label: newTitle,
            borderColor: lineColor,
            backgroundColor: fillColor,
            data: newData,
            // fill: {
            //     target: 'origin',
            //     below: `rgba(${bearishRed}, 0.1)`,
            //     above: `rgba(${bullishGreen}, 0.1)`,
            // },
            borderWidth: 2,
        },
    ]

    return { labels: newLabels, datasets: newDataSets }
}
