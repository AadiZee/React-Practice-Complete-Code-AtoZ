import React from 'react';
import ReactDOM from 'react-dom';
//import Car from './extra.js';
//import './style.css';
import './mySass.scss';

/*class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {favoritecolor: "red"};
    }
    /*componentDidMount(){
        setTimeout(() => {
            this.setState({favoritecolor: "yellow"})
        },1000)
    }*/
    /*shouldComponentUpdate(){
        return false;
    }*
    /*static getDerivedStateFromProps(props, state){
        return {favoritecolor: props.favcol};
    }*/
    /*changeColor = () => {
        this.setState({favoritecolor: "blue"});
    }*/
    /*componentDidMount(){
        setTimeout(()=>{
            this.setState({favoritecolor: "yellow"})
        },2000)
    }*/
    /*getSnapshotBeforeUpdate(prevProps, prevState){
        document.getElementById("div1").innerHTML =
        "Before the update, the favorite was " + prevState.favoritecolor;
    }*/
    /*componentDidUpdate(){
        document.getElementById("mydiv").innerHTML =
        "The updated favorite is " + this.state.favoritecolor;
    }*/

  /*  class Container extends React.Component {
        constructor(props){
            super(props);
            this.state = {show: true};
        }
        delHeader = () => {
            this.setState({show: false});
        }
    render(){
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
        return (
            <div>
                {myheader}
                <button type="button" onClick={this.delHeader}>Delete Header</button>
            </div>
        );
    }
}*/

   /* class Child extends React.Component {
        componentWillUnmount(){
            alert("The component named Header is about to be unmounted.");
        }
        render(){
            return (
                <h1>Hello World!</h1>
            );
        }
    }*/

   /* function shoot(){
        alert("Great Shot!");
    }

    const myelement = (
        <button onClick={shoot}>Take the shot!</button>
    );*/

    /*class Football extends React.Component{
        shoot(){
            alert("Great Shot!");
        }
        render(){
            return(
                <button onClick={this.shoot}>Take the shot!</button>
            );
        }
    }*/

    /*class Football extends React.Component{
        shoot = () => {
            alert(this);
        }
        render(){
            return (
                <button onClick={this.shoot}>Take the shot!</button>
            );
        }
    }*/

    /*class Football extends React.Component{
        constructor(props){
            super(props)
            this.shoot=this.shoot.bind(this)
        }
        shoot(){
            alert(this);
        }
    render(){
        return(
            <button onClick={this.shoot}>Take the shot!</button>
        );
    }
}*/

/*class Football extends React.Component{
    shoot = (a) =>{
        alert(a);
    }
    render(){
        return (
            <button onClick={()=>this.shoot("goal")}>Take the shot!</button>
        );
    }
}*/

/*class Football extends React.Component{
    shoot(a) {
        alert(a);
    }
    render(){
        return (
            <button onClick={this.shoot.bind(this,"Goal")}>Take the shot!</button>
        );
    }
}*/

/*class Football extends React.Component{
    shoot = (a,b) => {
        alert(b.type);
    }
    render(){
        return(
            <button onClick={(ev)=>this.shoot("Goal",ev)}>Take the shot!</button>
        );
    }
}*/

/*class Football extends React.Component{
    shoot = (a,b) => {
        alert(b.type);
    }
    render(){
        return(
            <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
        );
    }
}*/

/*class MyForm extends React.Component{
    render(){
        return(
            <form>
                <h1>Hello</h1>
                <p>Enter your name:</p>
                <input type="text"/>
            </form>
        );
    }
}*/

/*class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: ''};
    }
    myChangeHandler = (event) =>{
        this.setState({username: event.target.value});
    }
    render(){
        return(
            <form>
            <h1>Hello {this.state.username}</h1>
            <p>Enter your name:</p>
            <input type="text" onChange={this.myChangeHandler} />
            </form>
        );
    }
}*/

/*class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={username: ''};
        }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
    }
    render(){
        let header = '';
        if(this.state.username){
            header = <h1>Hello {this.state.username}</h1>;

        } else {
            header = '';
        }
        return(
            <form>
                {header}
                <p>Enter your name: </p>
                <input type="text" onChange={this.myChangeHandler} />
            </form>
        );
    }
}*/

/*class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {username: ''};
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("You are submitting "+this.state.username);
    }
    myChangeHandler = (event) =>{
        this.setState({username: event.target.value});
    }
    render(){
        return(
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username}</h1>
                <p>Enter your name and submit: </p>
                <input type='text' onChange={this.myChangeHandler}/>
                <input type='submit'/>
            </form>
        );
    }
}*/

/*class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val});
    }
    render(){
        return(
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input type='text' name='username' onChange={this.myChangeHandler} />
                <p>Enter your age:</p>
                <input type='text' name='age' onChange={this.myChangeHandler} />
            </form>
        );
    }
}*/

/* class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            username: '',
            age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if(nam === "age"){
            if (!Number(val)){
                alert("Your age must be a number")
            }
        }
        this.setState({[nam]:val});
    }
    render(){
        return(
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input type='text' name='username' onChange={this.myChangeHandler} />
                <p>Enter your age:</p>
                <input type='text' name='age' onChange={this.myChangeHandler} />
            </form>
        );
    }
}*/

/*class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            age: null,
        };
    }
    mySubmitHandler = (event) => {
        event.preventDefault();
        let age = this.state.age;
        if(!Number(age)){
            alert("Your age must be a number!");
        }
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val});
    }
    render(){
        return(
            <form onSubmit={this.mySubmitHandler}>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter your name:</p>
                <input type='text' name='username' onChange={this.myChangeHandler} />
                <p>Enter your age:</p>
                <input type='text' name='age' onChange={this.myChangeHandler}/>
                <br/>
                <br/>
                <input type='submit'/>
            </form>
        );
    }
}*/

/*class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            age: null,
            errormessage: ''
        };
    }
    myChangeHandler = (event)=>{
        let nam = event.target.name;
        let val = event.target.value;
        let err = '';
        if(nam === "age"){
            if(val !="" && !Number(val)){
                err=<strong>Your age must be a number</strong>;
            }
        }
        this.setState({errormessage: err});
        this.setState({[nam]:val});
        }
        render(){
            return(
                <form>
                    <h1>Hello {this.state.username} {this.state.age}</h1>
                    <p>Enter your name:</p>
                    <input type='text' name='username' onChange={this.myChangeHandler}/>
                    <p>Enter your age:</p>
                    <input type='text' name='age' onChange={this.myChangeHandler}/>
                    {this.state.errormessage}
                </form>
            );
        }
    }*/

   /* class MyForm extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                description: 'The content of textarea goes in the value attribute'
            };
        }
        render(){
            return(
                <form>
                    <textarea value={this.state.description}/>
                </form>
            );
        }
    }*/

    /*class MyForm extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                mycar: 'Fiat'
            };
        }
        render(){
            return(
                <form>
                    <select value={this.state.mycar}>
                        <option value="Ford">Ford</option>
                        <option value="Volvo">Volvo</option>
                        <option value="Fiat">Fiat</option>
                    </select>
                </form>
            )
        }
    }*/

    /*class MyHeader extends React.Component{
        render(){
            return(
                <div>
                    <h1 style={{color:'red'}}>Hello Style!</h1>
                    <p>Add a little Style!</p>
                </div>
            );
        }
    }*/

  /*  class MyHeader extends React.Component{
        render(){
            return(
                <div>
                    <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
                    <p>Add a little Style!</p>
                </div>
            )
        }
    } */

  /*  class MyHeader extends React.Component{
        render(){
            const mystyle = {
                color: "White",
                backgroundColor: "DodgerBlue",
                padding: "10px",
                fonFamily: "Arial"
            };
            return(
                <div>
                    <h1 style={mystyle}>Hello Style!</h1>
                    <p>Add a little Style!</p>
                </div>
            );
        }
    } */

   /* class MyHeader extends React.Component{
        render(){
            return(
                <div>
                    <h1>Hello Style!</h1>
                    <p>Add a little style!</p>
                </div>
            );
        }
    }*/

    class MyHeader extends React.Component {
        render(){
            return(
                <div>
                    <h1>Hello Style!</h1>
                    <p>Add a little style!</p>
                </div>
            );
        }
    }

ReactDOM.render(<MyHeader />, document.getElementById('root'));
