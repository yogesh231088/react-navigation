import React, {useReducer} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native'
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREAMENT = 15;

const reducer = (state, action) => {
    //state === { red: number, green: number, blue: number}
    //action === { type: 'red' || 'green' || 'blue', amount: 15 || -15}
    switch (action.type) {
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state
                : { ...state, red: state.red + action.payload};
        case 'change_green':
            if(state.green + action.payload > 255 || state.green + action.payload < 0){
                return state;
            }
            return { ...state, green: state.green + action.payload};
        case 'change_blue':
            if(state.blue + action.payload > 255 || state.blue + action.payload < 0){
                return state;
            }
            return { ...state, blue: state.blue + action.payload};
        default:
            return state;
    }

};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue:0 });
    const { red, green, blue } = state;
    console.log(state);

    return(
        <View>
            <ColorCounter
                onIncrease = { () => dispatch({type: 'change_red', payload: COLOR_INCREAMENT}) }
                onDecrease = { () => dispatch({type: 'change_red', payload: -1 * COLOR_INCREAMENT }) } 
                color="Red" 
            />
            <ColorCounter 
                onIncrease = { () => dispatch({ type: 'change_blue', payload: COLOR_INCREAMENT }) }
                onDecrease = { () => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREAMENT }) }
                color="Blue" 
            />
            <ColorCounter 
                onIncrease = { () => dispatch({ type: 'change_green', payload: COLOR_INCREAMENT }) }
                onDecrease = { () => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREAMENT }) }
                color="Green" 
            />
            <View 
                style={{ 
                    height: 150, 
                    width: 150, 
                    backgroundColor: `rgb(${state.red},${state.green},${state.blue})`
                }} 
            />
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;