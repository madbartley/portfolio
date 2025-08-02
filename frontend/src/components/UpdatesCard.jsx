import '../styles/Updates.css';

function UpdatesCard(props) {

    const postid = props.id;
    const post = props.post;
    const project = props.project;
    const datetime = props.date;

    let date=new Date(datetime).toDateString()
    console.log(date)

    console.log(postid);

    return(
        <div className="updates-container">
            <div className="circle">M</div>
            <div>{date}</div>
            <div>{post}</div>
        </div>
    )
}

export default UpdatesCard;