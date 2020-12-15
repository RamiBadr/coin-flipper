import { Component } from 'react';
import Coin from './Coin';
import { randoArr } from "./helpers.js";

class CoinFlip extends Component {
    constructor() {
        super();
        this.flipCoin = this.flipCoin.bind(this);
        this.state = {
            face: '',
            flips: 0,
            heads: 0,
            tails: 0
        }
    }

    static defaultProps = {
        coinFaces: ['heads', 'tails']
    }

    flipCoin() {
        const coinFaces = this.props.coinFaces;
        const face = randoArr(coinFaces);
        this.flipsCounter();

        if(face === "heads") {
            this.headsCounter();
        } else {
            this.tailsCounter();
        }

        this.setState(() => ({face}));
    }

    flipsCounter() {
        const flips = this.state.flips;
        this.setState({
            flips: flips + 1
        });
    }

    headsCounter() {
        const heads = this.state.heads;
        this.setState({
            heads: heads + 1
        });
    }

    tailsCounter() {
        const tails = this.state.tails;
        this.setState({
            tails: tails + 1
        });
    }

    render() {
        console.log(this.state.flips);
        return (
            <div>
                <h1>Let's flip a coin!</h1>
                <Coin face={this.state.face} />
                <button onClick={this.flipCoin}>Flip Coin</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails} tails.</p>
            </div>
        )
    }
}

export default CoinFlip;