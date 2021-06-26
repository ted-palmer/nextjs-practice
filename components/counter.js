import React, { useState } from 'react';


function Counter() {

    const [ count, setCount ] = useState(0)

    
    return (
        <>
            {count} <br></br>
            <button onClick={() => setCount(count + 1)}>Press Me</button>
        </>
    )
}

export default Counter;
 

