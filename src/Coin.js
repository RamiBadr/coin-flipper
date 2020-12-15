import { Component } from 'react';
import heads from  './coin-heads.jpg';
import tails from  './coin-tails.jpg';

class Coin extends Component {
    render() {
        let coinFace = '';
        if(this.props.face === 'heads') {
            coinFace = heads;
        } else if(this.props.face === 'tails') {
            coinFace = tails;
        }
        return(
            <div className='Coin'>
                {coinFace && <img src={coinFace} alt={this.props.face} width='400' style={{marginBottom: '20px'}}/> }
            </div> 
        )
    }
}

export default Coin;
