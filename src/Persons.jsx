import { useEffect, useState } from "react"
import Person from "./Person"

export default function Persons() {
 
    const [persons, setPersons] = useState([])
    
    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setPersons(data))
    },[])

    return (
        <div>
            <h4>Persons: {persons.length}</h4>
            {
              persons.map(person => <Person person={person}></Person>)
            }
        </div>
    )
}