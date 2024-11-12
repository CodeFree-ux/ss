// Componente para a seção de planejamento semanal de treinos.

import { Box, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material";
import { useState } from "react";

function Planning() {
    const [workoutModel, setWorkoutModel] = useState('2')
    return (
        <Box>
            <Box>
                <Typography>Selecione um Modelo:</Typography>
                <ToggleButtonGroup
                    value={workoutModel}
                    exclusive
                    onChange={(event, value) => {
                        if (value !== null) {
                            setWorkoutModel(value)
                        }
                    }}
                >
                    <ToggleButton value="2">AB</ToggleButton>
                    <ToggleButton value="3">ABC</ToggleButton>
                    <ToggleButton value="4">ABCD</ToggleButton>
                    <ToggleButton value="5">ABCDE</ToggleButton>
                </ToggleButtonGroup>
            </Box>
            <Box>
                <Typography>Configuração dos dias:</Typography>
                {workoutModel.length}
            </Box>
        </Box>
    )
}

export default Planning