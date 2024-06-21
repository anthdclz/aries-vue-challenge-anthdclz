export interface LineChartData {
    labels: number[]
    datasets: any[]
}

export interface OptionItem {
    id: number
    strike_price: number
    type: string
    bid: number
    ask: number
    long_short: string
    expiration_date: string
}
