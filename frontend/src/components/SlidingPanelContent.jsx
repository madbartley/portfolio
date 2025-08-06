import '../styles/MixedProject.css'


const SlidingPanelContent = (props) => {

    const poptype = props.poptype;

    if(poptype==="Documents") {

        return (
            <div>Docs</div>

    );

    } else if (poptype==="Videos") {

        return (
            <div>Videos</div>

    );

    } else if (poptype==="Photos") {

        return (
            <div>Photos</div>

    );

    } else if (poptype==="Demo") {

        return (
            <div>Demo</div>

    );

    } else {
        return (
            <div>That's weird... there's nothing here. We might have to open a Jira ticket for this one.</div>
        )
    }

    
}

export default SlidingPanelContent;