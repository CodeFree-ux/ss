import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useEffect, useState } from "react"
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import HistoryIcon from '@mui/icons-material/History';
function Footer() {
    const [activeButton, setActiveButton] = useState('treinos')

    return (
        <footer>
            <ToggleButtonGroup
                fullWidth
                exclusive
                value={activeButton}
                onChange={(event, value) => {
                    if (value !== null) setActiveButton(value)
                }}
            >
                <ToggleButton value='treinos'>
                    <FitnessCenterIcon />
                    <p>Treinos</p>
                </ToggleButton>
                <ToggleButton value='tchau'>
                    <HistoryIcon />
                    <p>Histórico</p>
                </ToggleButton>
            </ToggleButtonGroup>
        </footer>
    )
}
export default Footer