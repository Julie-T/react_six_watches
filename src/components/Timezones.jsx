import React, { Component } from 'react'
import Watches from './Watches'
import { nanoid }  from 'nanoid'

export class Timezones extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timezones: [],
            name: '',
            zone: '',
            id: ''
        }
    }

    nameHandleChange(e) {
        this.setState({name: e.target.value})
    }

    zoneHandleChange(e) {
        this.setState({zone: e.target.value})
    }

    timezoneHandleChange(e) {
        e.preventDefault();
        this.setState({timezones: [...this.state.timezones, {name: this.state.name, zone: this.state.zone, id: nanoid()}]})
        this.setState({name: ''})
        this.setState({zone: ''})
    }

    render() {
        return (
        <div>
            <div>
                <div className='block-input-name'>
                    <div className='input-name-label'>Название</div>
                    <input 
                        className='input-name' 
                        type='text' 
                        value={this.state.name}
                        onChange={(e) => this.nameHandleChange(e)}
                        placeholder='Moscow' 
                        autoFocus 
                        required
                    />
                </div>
                <div className='block-input-zone'>
                    <div className='input-name-zone'>Временная зона</div>
                    <input 
                        className='input-zone' 
                        type='text'
                        value={this.state.zone}
                        onChange={(e) => this.zoneHandleChange(e)}
                        placeholder='+3' 
                        required
                    />
                </div>
                <button 
                    className='button' 
                    type='submit' 
                    onClick={(e) => this.timezoneHandleChange(e)}
                >Добавить</button>
            </div>
            {this.state.timezones.map((timezone) =>  <Watches name={timezone.name} zone={timezone.zone} key={timezone.id}/>)}
        </div>
        )
    }
}

export default Timezones