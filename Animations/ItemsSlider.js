import React from 'react'
import { Animated, Dimensions } from 'react-native'
import { Easing } from 'react-native-reanimated';


class ItemsSlider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            left : new Animated.Value(Dimensions.get('window').width)
        }
    }

    componentDidMount() {
        Animated.timing(
            this.state.left,
            {
                toValue : 0,
                duration : 500
            }
        ).start()
    }

    render() {
        return(
            <Animated.View style={{ left : this.state.left }}>

                {this.props.children}
            </Animated.View>
        )
    }
}

export default ItemsSlider