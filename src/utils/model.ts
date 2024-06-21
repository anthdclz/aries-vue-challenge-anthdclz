export interface LineChartData {
    labels: number[]
    datasets: any[]
    calcs?: { prem: number; breakEvenPrice: number }
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
