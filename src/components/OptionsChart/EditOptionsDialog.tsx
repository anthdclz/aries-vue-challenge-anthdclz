import { useContext, useEffect, useState } from 'react'
import { OptionsChartContext } from '../../context/OptionsChartProvider'
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Stack,
    TextField,
} from '@mui/material/'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

const optionInit = {
    id: -1,
    long_short: 'long',
    type: 'Call',
    strike_price: 0,
    bid: 0,
    ask: 0,
}
const EditOptionsDialog = () => {
    const {
        optionsData,
        setOptionsData,
        selectedOption,
        setSelectedOption,
        isEditOptionsDialogOpen,
        setIsEditOptionsDialogOpen,
    } = useContext(OptionsChartContext)
    const [currentOption, setCurrentOption] = useState(optionInit)

    const handleLongShortChange = (event: SelectChangeEvent) => {
        setCurrentOption({
            ...currentOption,
            long_short: event.target.value as string,
        })
    }

    const handleCallPutChange = (event: SelectChangeEvent) => {
        setCurrentOption({
            ...currentOption,
            type: event.target.value as string,
        })
    }

    const handleStrikePriceChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setCurrentOption({
            ...currentOption,
            strike_price: event.target.value as unknown as number,
        })
    }

    const handleBidChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentOption({
            ...currentOption,
            bid: event.target.value as unknown as number,
        })
    }

    const handleAskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentOption({
            ...currentOption,
            ask: event.target.value as unknown as number,
        })
    }

    const handleDialogClose = () => {
        setIsEditOptionsDialogOpen(false)
        setSelectedOption(-1)
    }

    const handleSubmit = () => {
        const newOptionsData = optionsData
        newOptionsData[selectedOption] = currentOption
        setOptionsData(newOptionsData)
        handleDialogClose()
    }

    useEffect(() => {
        if (optionsData) {
            setCurrentOption(optionsData[selectedOption])
        }
    }, [optionsData, selectedOption])

    if (optionsData && currentOption) {
        return (
            <Dialog onClose={handleDialogClose} open={isEditOptionsDialogOpen}>
                <DialogTitle align="center">
                    Edit Option {currentOption.id + 1}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText sx={{ padding: '1rem 0' }}>
                        Please fill out this option's fields to update its
                        risk/reward chart.
                    </DialogContentText>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-simple-select-label">
                                Long/Short
                            </InputLabel>
                            <Select
                                labelId="long_short_1"
                                id="long_short_1"
                                value={currentOption.long_short}
                                label="Long/Short"
                                onChange={handleLongShortChange}
                            >
                                <MenuItem value="long">Long</MenuItem>
                                <MenuItem value="short">Short</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                            <InputLabel id="demo-simple-select-label">
                                Call/Put
                            </InputLabel>
                            <Select
                                labelId="call_put_1"
                                id="call_put_1"
                                value={currentOption.type}
                                label="Call/Put"
                                onChange={handleCallPutChange}
                            >
                                <MenuItem value="Call">Call</MenuItem>
                                <MenuItem value="Put">Put</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Stack direction="row" spacing={2}>
                        <Box>
                            <TextField
                                autoFocus
                                required
                                error={
                                    currentOption.strike_price < 79 ||
                                    currentOption.strike_price > 120
                                }
                                margin="dense"
                                id="strike_price_1"
                                name="strike_price_1"
                                label="Strike Price"
                                type="text"
                                variant="outlined"
                                size="small"
                                value={currentOption.strike_price}
                                onChange={handleStrikePriceChange}
                            />{' '}
                        </Box>
                        <Box>
                            <TextField
                                autoFocus
                                required
                                error={
                                    currentOption.bid < 1 ||
                                    currentOption.bid > 40
                                }
                                margin="dense"
                                id="bid_1"
                                name="bid_1"
                                label="Bid"
                                type="text"
                                variant="outlined"
                                size="small"
                                value={currentOption.bid}
                                onChange={handleBidChange}
                            />{' '}
                        </Box>
                        <Box>
                            <TextField
                                autoFocus
                                required
                                error={
                                    currentOption.ask < 1.0 ||
                                    currentOption.ask > 40
                                }
                                margin="dense"
                                id="ask_1"
                                name="ask_1"
                                label="Ask"
                                type="text"
                                variant="outlined"
                                size="small"
                                value={currentOption.ask}
                                onChange={handleAskChange}
                            />{' '}
                        </Box>
                    </Stack>
                </DialogContent>
                <DialogActions sx={{ padding: '1rem' }}>
                    <Button onClick={handleDialogClose}>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>
                        Update Chart
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}

export default EditOptionsDialog
