import {Component,createRef} from "react";

class Alert extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            text: ''
        }

        this.divRef = createRef(1)

    }

    handleTextAdding = (e, num) => {
        // console.log('e', e);
        this.setState({text: e.target.value});
        /*console.log(this.divRef);
        this.divRef.current.backgroundColor = 'yellow'*/

    }

    /*  shouldComponentUpdate(nextProps) {
          return this.props.color !== nextProps.color
      }

      componentWillUnmount() {
          console.log('undefined')
      }

      componentDidMount() {
          console.log('this.props', this.props)
      }
      componentDidUpdate(prevProps, prevState, snapshot) {
          console.log('rerendered')
      }*/

    click = () =>{
        // this.divRef.current.focus()
        this.divRef.current++;
        console.log('this.divRef',this.divRef)
    }

    render() {
        return (
            <header style={{backgroundColor: this.props.color}} className="App-header">
                <div onClick={this.click}  style={{width:200, height:200, backgroundColor: 'brown' }}/>
                <input
                    //ref={this.divRef}
                    value={this.state.text}
                    onChange= { (e)=>this.handleTextAdding(e,1)} type="text"/>
                <p>{this.state.text}</p>
            </header>
        )
    }


}

export default Alert