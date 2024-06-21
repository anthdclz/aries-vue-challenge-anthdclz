import './App.scss'
import OptionsChart from './components/OptionsChart'
import { OptionsChartProvider } from './context/OptionsChartProvider'

function App() {
    return (
        <>
            <h1>Options Strategy</h1>
            <OptionsChartProvider>
                <OptionsChart />
            </OptionsChartProvider>
        </>
    )
}

export default App
