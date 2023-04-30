
import Board from "./Board";
import React, { useState } from 'react';
import Calendar from "./Calendar";
import Summary from "./Summary";

const Main = () => {
    const [value, onChange] = useState(new Date());
    return(
        <main className="main">
            <div className="main__visual">
                <Summary />
                <Calendar />

            </div>
            {/* <div className="board"> 
                <Board />
            </div> */}

        </main>

    )
}

export default Main;