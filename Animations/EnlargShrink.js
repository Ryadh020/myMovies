/*import React from 'react'
import {Animated} from 'react-native'

class ShrinkFavoritButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          heartSize: new Animated.Value(this._getSize())
        }
    }

    _getSize() {
        if(this.props.shrinked) {
            return 40
        }else {
            return 80
        }
    }

    componentDidUpdate() {
        Animated.spring(
            this.state.heartSize,
            {
                toValue: this._getSize()
            }
        ).start()
    }

    render() {
        return(
            <Animated.View style={{width: this.state.heartSize, height: this.state.heartSize}}>
                {this.props.children}
            </Animated.View>
        )
    }
}

export default ShrinkFavoritButton*/

import React from 'react'
import { Animated } from 'react-native'

class EnlargeShrink extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      viewSize: new Animated.Value(this._getSize())
    }
  }

  _getSize() {
    if (this.props.shouldEnlarge) {
      return 40
    }
        return 80
  }
  
  componentDidUpdate() {
    Animated.spring(
      this.state.viewSize,
      {
        toValue: this._getSize()
      }
    ).start()
  }

  render() {
    return (
        <Animated.View
          style={{ width: this.state.viewSize, height: this.state.viewSize }}>
          {this.props.children}
        </Animated.View>
    )
  }
}

export default EnlargeShrink