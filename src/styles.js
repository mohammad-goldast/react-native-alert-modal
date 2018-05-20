import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        position: 'absolute',
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        transform: [ { translateY : -60 }],
        backgroundColor: '#34495e', 
    }, 
    textStyle: {
        color: '#fff',
        fontSize: 20
    },
    btnBox: { 
        width: 100, 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0,0,0,.1)' 
    },
    btnTextStyle: { 
        fontSize: 18 
    }
});

export default styles;