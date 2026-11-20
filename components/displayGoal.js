import { Text } from "react-native";


export default function DisplayGoal({ goal }) {
    return (
        <>
            <Text>{ goal.name } - { goal.due != '' ? goal.due : "No due date" }</Text>
            <Text>{ goal.desc != '' ? goal.desc : "No descripton" }</Text>
        </>
    )
}