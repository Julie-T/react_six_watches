import React, { Component } from 'react'
import Watches from './Watches'
import { nanoid }  from 'nanoid'
import '../App.css'

export class Timezones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timezones: [],
            name: '',
            zone: '',
            id: ''
        }
        this.deleteClock = this.deleteClock.bind(this);
    }

    nameHandleChange(e) {
        this.setState({name: e.target.value})
    }

    zoneHandleChange(e) {
        this.setState({zone: e.target.value})
    }

    timezoneHandleChange(e) {
        e.preventDefault();
        this.setState({timezones: 
            [...this.state.timezones, 
            {
                name: this.state.name, 
                zone: this.state.zone, 
                id: nanoid() 
            }]})
        this.setState({name: ''})
        this.setState({zone: ''})
    }


    // componentDidMount () {
    //     document.addEventListener(
    //         'click',
    //         this.deleteClock
    //     )
    // }

    deleteClock (e, id) {
        e.preventDefault();
        if (id) {
            this.setState({timezones: 
                this.state.timezones.filter(
                elem => elem.id !== id
            )})
        }
    }

    // componentWillUnmount() {
    //     document.removeEventListener(
    //         'click',
    //         this.deleteClock
    //     )
    // }


    render() {
        return (
        <div className='main-block'>
            <div className='block-timezone'>
                <div className='block-input-name block-input'>
                    <div className='input-name-label label'>Название</div>
                    <input 
                        className='input-name input' 
                        type='text' 
                        value={this.state.name}
                        onChange={(e) => this.nameHandleChange(e)}
                        placeholder='Moscow' 
                        autoFocus 
                        required
                    />
                </div>
                <div className='block-input-zone block-input'>
                    <div className='input-zone-label label'>Временная зона</div>
                    <input 
                        className='input-zone input' 
                        type='text'
                        value={this.state.zone}
                        onChange={(e) => this.zoneHandleChange(e)}
                        placeholder='+3' 
                        required
                    />
                </div>
                <button 
                    className='button-name-zone button' 
                    type='submit' 
                    onClick={(e) => this.timezoneHandleChange(e)}
                >Добавить</button>
            </div>
            <div className='all-clocks'>
                {this.state.timezones.map((timezone) =>  
                <Watches key={timezone.id} 
                name={timezone.name} 
                zone={timezone.zone} 
                id={timezone.id} 
                deleteClock={this.deleteClock}/>)}
            </div>
        </div>
        )
    }
}

export default Timezones