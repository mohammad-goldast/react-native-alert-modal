import React, { Component } from 'react';
import { 
    View,
    Text,
    Platform,
    TouchableNativeFeedback,
    Animated,
    Easing
} from 'react-native';

import styles from './styles';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            showModal: new Animated.Value(0),
            visible: props.visible
        }
        
    }
    componentDidMount() {
        this.createAnimation(this.state.showModal, this.props.animationSpeed, Easing.easeInOut, 0)
    }

    createAnimation = (value, duration = 600, easing, delay) => {
        return Animated.timing(
            value,
            {
                toValue: 1,
                duration,
                easing,
                delay,
                useNativeDriver: true
            }
        ).start(() => {
            this.setState({
                showModal: new Animated.Value(0),
            });
            setTimeout(() => {
                Animated.timing(this.state.showModal, {
                    toValue: 1,
                    duration: this.props.animationSpeed || 600,
                    easing: Easing.easeInOut,
                    delay: 0,
                    useNativeDriver: true
                }).start()
            }, this.props.timeToShow || 3000);
        });
    }

    render() {
        const { 
            text,
            textStyleProps, 
            onBtnPress, 
            visible, 
            btnText, 
            modalStyle, 
            position,
            btnTextStyleProps
        } = this.props;
        const { textStyle, container, btnBox, btnTextStyle } = styles;
        const { showModal } = this.state;
        
        var AnimationValue, modalPosition;
        if (position === 'top') {
            AnimationValue = visible ? [-60, 0] : [0, -60];
            modalPosition = { top: 0 }
        } else {
            AnimationValue = visible ? [60, 0] : [0, 60];
            modalPosition = { bottom: 0 }
        }

        const translateY = showModal.interpolate({
            inputRange: [0, 1],
            outputRange: AnimationValue
        });
        
        return (
            <Animated.View style={[container, { 
                transform: [ { translateY: translateY }]
            }, modalStyle, modalPosition]}>
                <Text style={[textStyle, textStyleProps]}>{text}</Text>
                {onBtnPress && 
                    <TouchableNativeFeedback
                        background={
                        Platform.Version >= 21 ?
                            TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', false) :
                            TouchableNativeFeedback.SelectableBackground()
                        }
                        onPress={onBtnPress}
                    >   
                        <View style={btnBox}>
                            <Text style={[btnTextStyle, btnTextStyleProps]}>{btnText}</Text>
                        </View>
                        
                    </TouchableNativeFeedback>
                }
            </Animated.View>
        );
    }
}

export default Modal;
