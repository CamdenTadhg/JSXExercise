const Person = (props) => {
    const adult = props.age >= 18;
    const nameLength = props.name.length > 8;
    return <div>
            <p>Learn some information about this person</p>
            <p>Name: {nameLength ? props.name.slice(0,5) : props.name}</p>
            <p>Age: {props.age}</p>
            <p>{adult ? "please go vote!" : "you must be 18"}</p>
            <ul>Hobbies
                {props.hobbies.map(h => <li>{h}</li>)}
            </ul>
        </div>
}