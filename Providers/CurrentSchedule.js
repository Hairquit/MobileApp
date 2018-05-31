import React, { Component } from 'react';
import {
    Platform,
    TouchableOpacity,
    StyleSheet,
    Button,
    Text,
    View,
    TextInput,
    NavigatorIOS
} from 'react-native';

export default class CurrentSchedule extends Component {
    constructor(props) {
        super(props);
        this.state = { currentWaiting: 5 };
    }

    addUser = (prevState) => {
        this.setState(prevState => {
            return { currentWaiting: prevState.currentWaiting + 1 }
        });
    }
    removeUser = (prevState) => {
        this.setState(prevState => {
            return { currentWaiting: prevState.currentWaiting - 1 }
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.box, styles.box1]}>
                    <Text style={styles.headerText}>
                        Currently there is a lot crowd and waiting time in the business
                    </Text>
                </View>
                <View style={[styles.box, styles.box2]}>
                    <TouchableOpacity
                        onPress={this.removeUser}
                        style={styles.subButton}
                    ><Text style={styles.buttonText}> - </Text>
                    </TouchableOpacity>

                    <View style={styles.counterTextView}><Text style={styles.counterText}>
                        {this.state.currentWaiting}
                    </Text></View>

                    <TouchableOpacity
                        onPress={this.addUser}
                        style={styles.addButton}
                    ><Text style={styles.buttonText}> + </Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.box, styles.box3]}>
                    <TextInput style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="5"
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handleEmail} />
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    //header
    box1: {
        flex: 2,
        // backgroundColor: 'rgba(200, 200, 200, 0.75)',
    },
    //content
    box2: {
        flex: 10,
        backgroundColor: 'rgba(200, 200, 200, 0.75)',
        justifyContent: 'center',
        // paddingHorizontal: 10
    },
    //footer
    box3: {
        flex: 5,
        // backgroundColor: 'rgba(200, 200, 200, 0.75)',
    },
    counterTextView: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    counterText: {
        fontSize: 100,
    },
    subButton: {
        alignItems: 'center',
        backgroundColor: '#ef6464',
        padding: 2,
    },
    addButton: {
        alignItems: 'center',
        backgroundColor: '#c9f298',
        padding: 5,
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    input: {
        margin: 50,
        height: 50,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
});