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

export default class GameScreen extends Component{
    constructor(props){
        super(props);

        this.state={
            reciting : false,
            data : [{
                direction: 'up',
            },
            {
                direction: 'down',
            },
            {
                direction: 'left',
            },
            {
                direction: 'right',
            },
            
        ],
            
        }


    }

    renderList(){
        return (
            <FlatList 
            horizontal={true}
            data={this.state.data}
            renderItem = {this._renderItem}
            contentContainerStyle = {{flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
                padding: 10,
                marginBottom: 40,
                marginTop: 40,}}
            />
        );
    }

    _renderItem = ({item}) => {
        return(
            <Text>{item.direction}</Text>
    );
    }

    render(){

        return(
            <View>
                <Text style={{textAlign: 'center', fontSize: 44}}>test</Text>
                <View>
                   {this.renderList()} 
                </View>

                <View>

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