import '../styles/App.css'

function Title(props) {

    return(
        <div>
            <div className="title-name">
            <h1>Hello</h1>
            <h1>My name is {props.name}</h1>
            </div>
        </div>
    )
}

export default Title;