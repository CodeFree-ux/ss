// Componente para a seção de criação de treinos.

import { Autocomplete, Box, Input, TextField, Typography } from "@mui/material";
import { useState } from "react";

function NewWorkout() {
    const [options, setOptions] = useState(['Agachamento Bulgaro', 'Elevação Lateral', 'Elevação Frontal'])
    const [exercisesList, setExercisesList] = useState(['Crucifixo', 'Gêmeos em Pé'])
    return (
        <Box>
            <Box>
                <Typography>Nome do treino:</Typography>
                <Input placeholder="Treino de peito monstrão"></Input>
            </Box>
            <Box>
                <Typography>Exercicios:</Typography>
                <Autocomplete
                    disablePortal
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Exercicios" />}
                    onChange={(oi, exercise) => {
                        setExercisesList([...exercisesList, exercise])
                        console.log(exercisesList)
                    }}
                />
            </Box>
            <Box>
                <Typography>Exercicios Selecionados</Typography>
                {exercisesList.map(i => <p key={i}>{i}</p>)}
            </Box>
        </Box>
    )
}
export default NewWorkout