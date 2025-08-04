import '../styles/Updates.css';

function UpdatesCard(props) {


    const postid = props.id;
    const post = props.post;
    const project = props.project;
    const datetime = props.date;
    const project_name = props.projectName.project;

    let date=new Date(datetime).toDateString()
    console.log(date)

    console.log(postid);

    console.log("Project from db: ", project);
    console.log("Project from state: ", project_name);

    if(project === project_name ){

    return(
        <div className="updates-container">
            <div className="circle">M</div>
            <div>{date}</div>
            <div>{post}</div>
        </div>
    )
    }
}

export default UpdatesCard;