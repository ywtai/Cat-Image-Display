import React, { Component } from 'react'
import cog from './img/settings-cog.svg'

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '  Stranger  ',
            img1: 1,
            img2: 2,
            img3: 3,
            maxImageAmount: 5,
            filterNum: 0,
            filterClassAmount: 4,
            filter: ['', 'grayscale', 'saturate', 'opacity']
        };
    }


    render() {
        return (
            <>
                <div className='wrap'>
                    <img className={'profileImage '+this.props.filterName} src={this.props.imagePath} alt='profile' />
                    <div className='todoListHeader'>{this.props.text}</div>
                </div>
                <img className='setting' src={cog} onClick={() => this.props.setCurrentPage('NameSetting')} alt='setting' />
                <div className='wrapList'>
                    <div className='todoList'>
                        <input id="name" name="name" value={this.state.name} onChange={this.changeState}/>

                    </div>
                </div>
            </>
        )
    }
}

export default TodoList
