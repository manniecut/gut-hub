import React, { Component } from 'react';
import './Result.css'

class Result extends Component {

    render() {
        return (
            <>

                <li className='Result'>

                    <h3 className='Result__username'>
                        <a href="/recipe">Result</a>
                    </h3>
                    <p>
                        Quick description so yummy.
                    </p>

                </li>
            </>
        )
    }
}

export default Result;