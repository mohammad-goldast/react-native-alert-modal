# react-native-alert-modal
React-Native-Alert-Modal is a simple to use modal for Android &amp; IOS.

## Demo

![Screenshot of RNAlertModal](https://raw.githubusercontent.com/blackhair/react-native-alert-modal/master/demo/demo.gif)

## Description

This package is developed for the convenience of `ReactNative` programmers so they can easily use `Modal`s.
Soon new features like `Effects` are added.

## Installation

1. Run: `$ npm install react-native-alert-modal --save`
2. Add: `import Modal from 'react-native-alert-modal'`

## Props

| Prop | Description | Default |
|---|---|---|
|**`msg`**|Message display in alert |*None*|
|**`btnMsgStyleProps`**|To change or add style of modal message |*`None`*|
|**`modalStyle`**|An extra style props to change or add custom style |*`None`*|
|**`visible`**|The type is boolean (*`True`* to visible and *`False`* to hidden) |`None`|
|**`position`**|*`top`* or *`bottom`* of screen|*None*|
|**`animationSpeed`**|Speed of vertical modal animation (millisecond) |*`600 ms`*|
|**`timeToShow`**|Modal time display (millisecond)|*`2000 ms`*|
|**`btnText`**|Text of modal button |*None*|
|**`btnTextStyleProps`**|To change or add style of modal button text|*None*|
|**`onBtnPress`**|Callback operation of clicked modal button|*None*|


## Time to test

    export default class App extends Component {
      constructor(props) {
        super(props);

        this.state = {
          showModal: true
        }
      }

      componentWillMount() {
        setTimeout(() => {
          this.setState({
            showModal: false
          });
        }, 2000);
      }

      render() {
        return (
          <View style={styles.container}> 
            <Modal 
                msg="Hello world !"
                modalStyle={{ backgroundColor: '#34495e'}}
                visible={this.state.showModal}
                position="bottom"
                animationSpeed={300}
                timeToShow={3000}
                btnText="Test"
                btnMsgStyleProps={{ color: '#eee' }}
                textStyleProps={{ color: '#eee'}}
                onBtnPress={() => console.log('Btn Pressed !')}
            />
            <Text>Modal !</Text>
          </View>
        );
      }
    }
