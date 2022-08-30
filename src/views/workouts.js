import React, { useState } from 'react';
import '../styles/Workouts.css';
import { useAuth0 } from '@auth0/auth0-react';
import benchPress from '../images/benchpress.gif';
import squat from '../images/squatgif.gif';
import deadLift from '../images/dead-lift.gif';
// import getExerciseData from '../data/exerciseData';
import onClickOutside from 'react-onclickoutside';
import Dropdown from '../components/dropdown';
//EXERCISE TILES
import Compound from '../components/ExerciseTiles/Compound'
import Core from '../components/ExerciseTiles/Core'
import Chest from '../components/ExerciseTiles/Chest'
import Arms from '../components/ExerciseTiles/Arms'
import Back from '../components/ExerciseTiles/Back'
import Legs from '../components/ExerciseTiles/Legs'
import UpperBody from '../components/ExerciseTiles/UpperBody'


const exercises = [
    {
        id: 1,
        type: "Compound",
        name: "Bench Press"
    },
    {
        id: 2,
        type: "Compound",
        name: "Squat"
    },
    {
        id: 3,
        type: "Compound",
        name: "Deadlift"
    },
    {
        id: 4,
        type: "Upper Body",
        name: "Shoulder Press"
    },
    {
        id: 5,
        type: "Upper Body",
        name: "Dumbbell Press"
    },
    {
        id: 6,
        type: "Chest",
        name: "Chest Flies"
    },
    {
        id: 7,
        type: "Arms",
        name: "Tricep Extensions"
    },
    {
        id: 8,
        type: "Upper Body",
        name: "Skullcrushers"
    },
    {
        id: 9,
        type: "Arms",
        name: "Bicep Curl"
    },
    {
        id: 10,
        type: "Upper Body",
        name: "Barbell Row"
    },
    {
        id: 11,
        type: "Back",
        name: "Dumbbell Row"
    },
    {
        id: 12,
        type: "Core",
        name: "Lat Pulldown"
    },
    {
        id: 13,
        type: "Back",
        name: "Cable Row"
    },
    {
        id: 14,
        type: "Legs",
        name: "Leg Press"
    },
    {
        id: 15,
        type: "Legs",
        name: "Quad Extension"
    },
    {
        id: 16,
        type: "Legs",
        name: "Hamstring Curl"
    },
    {
        id: 17,
        type: "Legs",
        name: "Calf Raise"
    },
    {
        id: 18,
        type: "Core",
        name: "Hip Thrust"
    },
    {
        id: 19,
        type: "Core",
        name: "Hip Abduction"
    },
    {
        id: 20,
        type: "Core",
        name: "Hip Adduction"
    },
    {
        id: 21,
        type: "Upper Body",
        name: "Dips"
    },
    {
        id: 22,
        type: "Core",
        name: "Planks"
    },
    {
        id: 23,
        type: "Upper Body",
        name: "Lateral Raise"
    },
    {
        id: 24,
        type: "Back",
        name: "Face Pull"
    },
    {
        id: 25,
        type: "Back",
        name: "Back Extensions"
    },
    {
        id: 26,
        type: "Back",
        name: "Inverted Row"
    }
]

const ExerciseReference = () => {
    const [Type, setType] = useState(localStorage.getItem('Type'))
    const selectedType = localStorage.getItem('Type');
    console.log(selectedType);
    let isCore = false;
    let isCompound = true;
    let isLegs = false;
    let isChest = false;
    let isUpper = false;
    let isArms = false;
    let isBack = false;






    // const exercise = getExerciseData();

    //GMS all of the spans in these cards are for future text placement. 
    //GMS it's sort of clunky but the way we can add cards right now is simply alt-shifting these. we could write a loop to render more if we're drawing from a database later. 

    //GMS multiselect currently disabled in dropdown call, add to enable

    return (
        <div className="wrap">
            <Dropdown title="Select exercise type" exercises={exercises} />
            {Type === 'Compound' && <Compound />}
            {Type === 'Core' && <Core />}
            {Type === 'Arms' && <Arms />}
            {Type === 'Back' && <Back />}
            {Type === 'Chest' && <Chest />}
            {Type === 'Upper Body' && <UpperBody />}
            {Type === 'Legs' && <Legs />}
        </div>
    );
};

export default ExerciseReference;