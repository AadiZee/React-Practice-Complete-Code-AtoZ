import React from 'react';
import ReactDOM from 'react-dom';
import styles from './mystyle.module.css';

/*class Car extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand: " Ford",
            model: " Mustang ",
            color: "red",
            year: 1964
        };
    }
    changeColor = () => {
        this.setState({color: "blue"});
    }
    render(){
    return(
        <div>
            <h1>My {this.state.brand}</h1>
            <p>
                It is a {this.state.color} 
                 {this.state.model} 
                 from {this.state.year}.
            </p>
            <button
                type="button"
                onClick={this.changeColor}>Change Color</button>
        </div>
    );
    }
}*/
class Car extends React.Component{
    render(){
        return<h1 className={styles.bigblue}>Hello Car!</h1>;
    }
}

export default Car;