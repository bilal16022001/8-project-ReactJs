import React, { useState } from 'react'
import { DataText } from './LoremData'

function Lorem() {

    DataText.length = 1
    return (
        <div>
            <span>Paragraphs:</span>
            <input type="number" />
            <button>Generate</button>
            {
                DataText.map(i => (
                    <div>
                        <p>{i.para}</p>
                    </div>
                ))
            }
        </div >
    )
}

export default Lorem
