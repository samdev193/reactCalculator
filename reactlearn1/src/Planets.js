export const Planets = (props) => {
    return (
        <div>
            {props.isGasPlanet && <h1> {props.name} </h1>}
        </div>
    )
}