import NewWorkout from '../components/newWorkout';
import AddIcon from '@mui/icons-material/Add';
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from "react"

import { app, db, collectionRef } from '../database/firestore';
import { getDocs } from 'firebase/firestore';
import Planning from '../components/planning';

function Treinos() {
    const [modal, setModal] = useState('')

    function createModal(name: string) {
        if (name === 'workout') {
            return <NewWorkout />
        }
        return <Planning />
    }

    const docs = getDocs(collectionRef).then((snapshots) => {
        let exercises = []
        snapshots.docs.forEach(exercise => {
            exercises.push({ ...exercise.data(), id: exercise.id })
            console.log(exercises)
        })
    })

    return (
        <section>
            <h1>Seus Treinos</h1>
            <ToggleButtonGroup
                fullWidth
                onChange={(event, value) => {
                    if ((value !== null) && (modal !== value)) setModal(value)
                }}
                exclusive
                value={modal}
            >
                <ToggleButton value='workout'>
                    <AddIcon />
                    Criar Treino
                </ToggleButton>
                <ToggleButton value='planning'>
                    Planejamento
                </ToggleButton>
            </ToggleButtonGroup>

            {modal ? createModal(modal) : ''}
        </section>
    )
}

export default Treinos