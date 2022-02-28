// import React from "react";

import NavButton from "./NavButton";

export default function Navbar(){
    return (
        <nav>
            <p>React components and Props</p>
            <NavButton />
            <NavButton message={"Click me for greens"} color={"green"}/>
            <NavButton message={"Click me for pinks"} color={"pink"} linkTo={"www.css.com"}/>
        </nav>
    )
}

// export default Navbar;