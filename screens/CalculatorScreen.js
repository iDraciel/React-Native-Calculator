
require("../lib/swisscalc.lib.format.js");
require("../lib/swisscalc.lib.operator.js");
require("../lib/swisscalc.lib.operatorCache.js");
require("../lib/swisscalc.lib.shuntingYard.js");
require("../lib/swisscalc.display.numericDisplay.js");
require("../lib/swisscalc.display.memoryDisplay.js");
require("../lib/swisscalc.calc.calculator.js");

import React from 'react';
import { StyleSheet, Dimensions, PanResponder, View, Text } from 'react-native';
import {CalcButton,CalcDisplay} from './../components';

export default class CalculatorScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state={
       display:"0",
    };
    //Initializing Calculator
    this.oc = global.swisscalc.lib.operatorCache;
    this.calc = new global.swisscalc.calc.calculator();

    }
    //digit function
    onDigitPress= (digit)=> {
       this.calc.addDigit(digit);
       this.setState({display:this.calc.getMainDisplay()})
    }
    //clear Screen
    onClearPress = () =>{
        this.calc.clear();
        this.setState({display:this.calc.getMainDisplay()})
    }
    onBackspacePress = () => {
        this.calc.backspace();
        this.setState({ display: this.calc.getMainDisplay() });
      }

      onBinaryOperatorPress = (operator) =>{
     this.calc.addBinaryOperator(operator)
     this.setState({ display: this.calc.getMainDisplay() });
      }
     
  onUnaryOperatorPress = (operator) => {
    this.calc.addUnaryOperator(operator);
    this.setState({ display: this.calc.getMainDisplay() });
  }
      onPressEqual=()=>{
          this.calc.equalsPressed();
          this.setState({ display: this.calc.getMainDisplay() });
      }
  render() {
   
    return (
      <View style={styles.container} >
          <View style={styles.displayContainer}>
          <CalcDisplay display={this.state.display}/>
          </View>
         
          <View style={styles.buttonContainer}>
          <View style={styles.buttonRow}>
         <CalcButton title="C" onPress={this.onClearPress} color="black" backgroundColor="#b3edf8" />
         <CalcButton title="&#x21e6;" onPress={this.onBackspacePress} fontWeight="700" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onUnaryOperatorPress(this.oc.PercentOperator)}} title="%" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.DivisionOperator)}}  title="/" color="black" backgroundColor="#b3edf8" />
         </View>
         <View style={styles.buttonRow}>
         <CalcButton onPress={()=>{this.onDigitPress("7")}} title="7" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onDigitPress("8")}} title="8" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onDigitPress("9")}} title="9" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.MultiplicationOperator)}}  title="x" color="black" backgroundColor="#b3edf8" />
         </View>
         <View style={styles.buttonRow}>
         <CalcButton onPress={()=>{this.onDigitPress("4")}} title="4" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onDigitPress("5")}} title="5" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onDigitPress("6")}} title="6" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.SubtractionOperator)}}  title="-" color="black" backgroundColor="#b3edf8" />
         </View>
         <View style={styles.buttonRow}>
         <CalcButton onPress={()=>{this.onDigitPress("1")}} title="1" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onDigitPress("2")}} title="2" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onDigitPress("3")}} title="3" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onBinaryOperatorPress(this.oc.AdditionOperator)}}   title="+" color="black" backgroundColor="#b3edf8" />
         </View>
         <View style={styles.buttonRow}>
         <CalcButton onPress={()=>{this.onDigitPress("0")}} title="0" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onDigitPress("00")}} title="00" color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={()=>{this.onDigitPress(".")}} title="." color="black" backgroundColor="#b3edf8" />
         <CalcButton onPress={this.onPressEqual} title="=" color="black" backgroundColor="#b3edf8" />
         </View>
         </View>


      </View>


    )
  }

}

const styles= StyleSheet.create({
    buttonRow: {display: "flex",flexDirection:"row",
      },
    displayContainer: {flex:1,justifyContent:"flex-end"},
    container:{flex:1,backgroundColor:"#d1f1f9"},
   
})