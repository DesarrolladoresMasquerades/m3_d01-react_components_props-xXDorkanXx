import "./NavButton.css"

function handleButtonClick(event){
    console.log("NavButton: ", event.target);
}

export default function NavButton(props){
    console.log("Show props in the browser", props);
    return (
        <a href={props.linkTo || "www.ironhack.com"}>
            <button onClick={handleButtonClick} className={`NavButton NavButton-${props.color}`}>
                {props.message || "Go to Ironhack"}
            </button>
        </a>
    )
}