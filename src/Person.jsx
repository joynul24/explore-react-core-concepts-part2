export default function Person({person}) {
    // console.log(person);
    const {name, email} = person;
    return (
        <div className="box-2">
            <h5>Name: {name}</h5>
            <p>Email: {email}</p>
        </div>
    )
}