import React, { Component } from 'react'
import style from './Light.module.css'

export default class Light extends Component {

    constructor(props) {
        super(props);

        this.state = {
            flag: false,
            lamp: '',
            backgroundColor: 'black',
            backgroundColor1: 'rgb(247, 253, 74)',
            backgroundColor2: 'black',
            backgroundColor3: 'red',
            backgroundColor4: 'blue'
        }
    }

    yellow = () => {
        if (this.state.lamp.length <= 0) {
            this.setState({ backgroundColor: this.state.backgroundColor1 })
        }
    }

    red = () => {
        if (this.state.lamp.length <= 0) {
            this.setState({ backgroundColor: this.state.backgroundColor3 })
        }
    }

    blue = () => {
        if (this.state.lamp.length <= 0) {
            this.setState({ backgroundColor: this.state.backgroundColor4 })
        }
    }

    off = () => {
        if (this.state.lamp.length <= 0) {
            this.setState({ backgroundColor: this.state.backgroundColor2 })
        }
    }


    render() {
        return (
            <div className={style.app}>
                <div >
                    <div className={style.lamp} onChange={(e) => this.setState({ lamp: e.target.value })} style={{ backgroundColor: this.state.backgroundColor }} />
                    <div className={style.halflamp} onChange={(e) => this.setState({ lamp: e.target.value })} style={{ backgroundColor: this.state.backgroundColor }} />
                    <div className={style.bottomlamp} />
                    <div className={style.bottomlamp} />
                    <div className={style.sbottomlamp} />
                    <div className={style.tbottomlamp} />

                </div>
                <div>
                    <button className={style.buttonyellow} onClick={this.yellow}>Yellow</button>
                    <button className={style.buttonred} onClick={this.red}>Red</button>
                    <button className={style.buttonblue} onClick={this.blue}>Blue</button>
                    <button className={style.buttonoff} onClick={this.off}>Off</button>
                </div>
            </div>
        )
    }
}

