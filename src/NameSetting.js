import React, { Component } from 'react'

class NameSetting extends Component {
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
        this.changeState = this.changeState.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleNumtoImg = (num) => {
        return require(`./img/cat${num}.jpg`).default;
    }

    handleNumtoFilter = (num) => {
        return this.state.filter[num];
    }

    changeForward = (num) => (num < this.state.maxImageAmount ? num + 1 : 1);
    changeBackward = (num) => (num === 1 ? this.state.maxImageAmount : num - 1);
    changeFilter = (num) => (num < this.state.filterClassAmount - 1 ? num + 1 : 0);

    changeImage = (position) => {
        const { img1, img2, img3, filterNum } = this.state;
        switch (position) {
            case "backward":
                this.setState({
                    img1: this.changeBackward(img1),
                    img2: this.changeBackward(img2),
                    img3: this.changeBackward(img3),
                });
                break;
            case "forward":
                this.setState({
                    img1: this.changeForward(img1),
                    img2: this.changeForward(img2),
                    img3: this.changeForward(img3),
                });
                break;
            case "filter":
                this.setState({
                    filterNum: this.changeFilter(filterNum),
                })
                break;
            default:
                break;
        }

    }

    changeState(e) {
        this.setState({name:e.target.value});
    }

    submitForm(){
        this.props.setName(this.state.name, this.handleNumtoImg(this.state.img2), this.handleNumtoFilter(this.state.filterNum));
    }

    render() {
        return (
            <div>
                <div className='wrap'>
                    <h1>{this.props.text}</h1>
                    <input id="name" name="name" value={this.state.name} onChange={this.changeState}/>
                </div>
                <h3>Please Select Your Favorite Image to Be Shown as Your Profile.</h3>
                <div className='wrapImage'>
                    <img className='smallCircle' src={this.handleNumtoImg(this.state.img1)} 
                        alt='cat' onClick={() => this.changeImage('backward')} />

                    <img className={'largeCircle '+this.handleNumtoFilter(this.state.filterNum)} 
                        src={this.handleNumtoImg(this.state.img2)} alt='cat' 
                        onClick={() => this.changeImage('filter')} />
                        
                    <img className='smallCircle' src={this.handleNumtoImg(this.state.img3)} 
                        alt='cat' onClick={() => this.changeImage('forward')} />
                </div>
                <h3 className='next' onClick={this.submitForm}>Continue...</h3>
            </div>
        );
    }
}

export default NameSetting