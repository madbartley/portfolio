import '../styles/Updates.css';

function UpdatesCard(props) {

    const postid = props.id;
    const post = props.post;
    const project = props.project;
    const date = props.date;

    return(
        <div className="updates-container">
            <div>{"POST ID: " + postid}</div>
            <div>{"POST: " + post}</div>
            <div>{"PROJECT: " + project}</div>
            <div>{"DATE TIME: " + date}</div>
        </div>
    )
}

export default UpdatesCard;