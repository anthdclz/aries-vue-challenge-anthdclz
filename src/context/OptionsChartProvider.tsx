import { createContext, useMemo, useState } from 'react'

export interface OptionsChartData {
    optionsData: any | null
    setOptionsData: (obj: any | null) => void
    selectedOption: number
    setSelectedOption: (n: number) => void
    isEditOptionsDialogOpen: boolean
    setIsEditOptionsDialogOpen: (bool: boolean) => void
}

export const OptionsChartContext = createContext<OptionsChartData>({
    optionsData: null,
    setOptionsData: () => {},
    selectedOption: -1,
    setSelectedOption: () => {},
    isEditOptionsDialogOpen: false,
    setIsEditOptionsDialogOpen: () => {},
})

export const OptionsChartProvider = ({
    children,
}: {
    children: JSX.Element | JSX.Element[]
}): JSX.Element => {
    const [optionsData, setOptionsData] = useState<any | null>(null)
    const [selectedOption, setSelectedOption] = useState(-1)
    const [isEditOptionsDialogOpen, setIsEditOptionsDialogOpen] =
        useState<boolean>(false)

    const OptionsChartDataValues = useMemo(
        () => ({
            optionsData,
            setOptionsData,
            selectedOption,
            setSelectedOption,
            isEditOptionsDialogOpen,
            setIsEditOptionsDialogOpen,
        }),
        [optionsData, selectedOption, isEditOptionsDialogOpen],
    )

    return (
        <OptionsChartContext.Provider value={OptionsChartDataValues}>
            {children}
        </OptionsChartContext.Provider>
    )
}
