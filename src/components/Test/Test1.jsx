import React from 'react';


class Test1 extends React.Component {   
    text1 = {
            kind: 'text',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            intentions: [
                { kind: 'emphasized', index: 0, length: 11 },
                { kind: 'important', index: 28, length: 27 },
            ]
        }
    render() {        
        return (
            <div className="test1">
                <p className="test1-content" style={{marginTop:"60px"}}>
                    <em>Lorem ipsum</em> dolor sit amet, <strong>consectetur adipiscing elit</strong>.
                </p>
            </div>
        )
    }
}

export default Test1;