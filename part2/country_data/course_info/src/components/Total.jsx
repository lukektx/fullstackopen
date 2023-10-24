const Total = ({parts}) => {
    const total = parts.reduce((val, current) => val + current.exercises, 0)
    return (
        <b>
            total of {total} exercises
        </b>
    )
}

export default Total