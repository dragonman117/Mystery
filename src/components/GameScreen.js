import React, {Component} from 'react';
import {
    Image,
    TouchableOpacity,
    ScrollView,
    View,
    Text,
    FlatList,
    ListItem,
    StyleSheet,
} from 'react-native';

import Level from '../store/levels';



export default class GameScreen extends Component{
    constructor(props){
        super(props);

        
        this.data = [];
        
        global.sequence = [];

    }

    componentDidMount(){
        const levelGen = new Level();
        let result = levelGen.genLevel();
        console.log("RESULT AT MOUNT: " + result[0]);
        this.setState({
            data: result[0]
        });
        this.data = result[0];
        //sequence = this.data;
        console.log("SEQUENCE: " + sequence);
        this.generateIcons();
        sequence = this.data;
    }

    

    _renderItem = ({item}) => {
        
        return(
            <View>
            
            {console.log("item = " + item)}
            <Text>{item}</Text>
            </View>
    );}

    generateIcons(){
        

        for (i = 0; i < 4; i++){
            console.log("Data Before Add: " + this.data[i]);
            let temp = this.data[i];
            setTimeout(() => {sequence[i] = temp]} , 1000);
            console.log("Sequence after add: " + sequence);
        }
    }

    render(){

        return(
            <View>
                
                <Text style={{textAlign: 'center', fontSize: 44,}}>TEST</Text>
                <View style={{justifyContent: 'space-around', flexDirection:'row'}}>
                   <Text style={{fontSize: 44}}>{sequence[0]}</Text>
                   <Text style={{fontSize: 44}}>{sequence[1]}</Text>
                   <Text style={{fontSize: 44}}>{sequence[2]}</Text>
                   <Text style={{fontSize: 44}}>{sequence[3]}</Text>
                    
                </View>

                
                
            </View>

        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginBottom: 40,
    },
});