import React, {Component} from 'react';
import { Link } from 'react-router-dom';


class Layout extends Component {

    render() {     
        return (
            <div className="container">                
                <div className="header">
                    <ul>
                        <li>
                            <Link to = "/">TEST1</Link>
                        </li>
                        <li>
                            <Link to = "/test2">TEST2</Link>
                        </li>           
                    </ul>
                </div>
                <div>
                    {this.props.children}
                </div>                
                <div className="footer" >
                    By Charlie
                </div>
            </div>
        )
    }
}

export default Layout;