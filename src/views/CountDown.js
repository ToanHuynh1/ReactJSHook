
import React, {useState, useEffect} from 'react';

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1000
    };
  }

//   settimeout chạy 1 lần
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count - 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timer){
      clearInterval(this.timer)
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.count !== this.state.count && this.state.count === 0)
    {
      if (this.timer){
        clearInterval(this.timer)
        this.props.onTimesup()
      }
    }  
}

  render() {
    return <h1>{this.state.count}</h1>;
  }
}


const NewCounDown = (props) => {
  const [count, setCount] = useState(1000)

  useEffect(() => {
    
    if (count === 0){
      return
    }
    let timer = setInterval(() => {
      setCount(count - 1)
    }, 1000);

    return () => {
      clearInterval(timer)
    }
  }, [count]);
  return (
    <div>{count}</div>
  )
}


export {NewCounDown, CountDown};