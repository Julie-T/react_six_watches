// import ReactDOM from 'react-dom/client';
// import PropTypes from 'prop-types'
// import React, { Component } from 'react'

// export class Watches extends Component {
//     constructor(props) {
//         super(props);
//         this.divRef = React.createRef();
//     }
//   static propTypes = {}

//   render() {
//     return (
//     <div className='simple-div' ref={this.divRef}>
//     {this.props.name}
//     </div>
//     )
//   }

//   componentDidMount() {
//     console.log(this.divRef);
//     console.log(document.querySelector('.simple-div'));
//   }
// }

// Watches.defaultProps = {
//     name: 'watch'
// }

// ReactDOM.render(
//     <Watches/>,
//     document.getElementById('root')
// );

// export default Watches
import PropTypes from 'prop-types'
import HighlightOff from '@material-ui/icons/Close';
import React, { Component } from 'react'
import '../App.css'
var moment = require('moment-timezone');


export class Watches extends Component {
    
    constructor(props) {
        super(props);
        this.state = {date: moment().tz("Europe/London")};
    }

    static propTypes = {}

    componentDidMount () {
        this.timer = setInterval(
            () => this.setState({date: moment().tz("Europe/London").add((this.props.zone), 'hours')}),
            1000
        );
    }

    render() {
        return (
            <div className='block-clock'>
                <div className='clock-name'>{this.props.name}</div>
                {/* <div>{this.state.date.add((this.props.zone), 'hours').format('hh.mm.ss')}</div> */}
			    <div className='block-clock-button'>
                    <div className="clock"
				        style={{
						    '--hours': `${this.state.date.format('hh')}`,
						    '--minutes': `${this.state.date.format('mm')}`,
						    '--seconds': `${this.state.date.format('ss')}`,
					    }}>
				        <span className="clock__hours" />
				        <span className="clock__minutes" />
				        <span className="clock__seconds" />
			        </div>
                    <HighlightOff className='clock-button' onClick={(e) => this.props.deleteClock(e, this.props.id)}/>
                </div>
		    </div>
        )
    }
}

Watches.propTypes = {
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    zone: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    deleteClock: PropTypes.func.isRequired
}

export default Watches