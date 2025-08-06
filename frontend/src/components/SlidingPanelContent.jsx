import '../styles/MixedProject.css'


const SlidingPanelContent = (props) => {

    const poptype = props.poptype;

    if(poptype==="Documents") {

        return (
            <div>Docs: Looks like this feature isn't quite ready! Check back later!</div>

    );

    } else if (poptype==="Videos") {

        return (
            <div>Videos: Looks like this feature isn't quite ready! Check back later!</div>

    );

    } else if (poptype==="Photos") {

        return (
            <div>Photos: Looks like this feature isn't quite ready! Check back later!</div>

    );

    } else if (poptype==="Demo") {

        return (
            <div>Demo: Looks like this feature isn't quite ready! Check back later!</div>

    );

    } else {
        return (
            <div>That's weird... there's nothing here. We might have to open a Jira ticket for this one.</div>
        )
    }

    
}

export default SlidingPanelContent;