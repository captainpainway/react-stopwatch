class Stopwatch extends React.Component {
    constructor(props) {
        super(props);
        this.begin = this.begin.bind(this);
        this.stop = this.stop.bind(this);
        this.tick = this.tick.bind(this);
        this.zeros = this.zeros.bind(this);
        this.state = {
            startTime: 0,
            timer: 0
        };
    }

    begin() {
        this.setState({
            timer: requestAnimationFrame(this.tick)
        });
    }
    
    stop() {
        cancelAnimationFrame(this.state.timer);
        this.setState({
            startTime: 0,
            timer: 0
        });
    }

    tick() {
        this.setState({
            startTime: this.state.startTime +1,
            timer: requestAnimationFrame(this.tick)
        });
    }

    zeros(n) {
        return n < 10 ? '0' + n : n;
    }

    render() {
        let time = this.state.startTime;
        let minutes = Math.floor(time/6000);
        let seconds = Math.floor(time/100) % 60; 
        let hundredths = time % 100;
        
        return (
            <div className='box'>
                <p>{this.zeros(minutes)}:{this.zeros(seconds)}:{this.zeros(hundredths)}</p>
                <div className='buttons'>
                    <button onClick={this.begin}>START</button>
                    <button onClick={this.stop}>STOP</button>
                </div>
            </div>
        );
    }
};

ReactDOM.render(<Stopwatch />, document.getElementById('app'));
