

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    NavigatorIOS
} from 'react-native';
import SearchPage from '../SearchPage';
import Tabs from '../tab';
import CurrentSchedule from './CurrentSchedule';
import Schedule from './Schedule';

type Props = {};
export default class ProviderApp extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = { currentWaiting: 5 };
    }

    render() {
        return (
            <View style={styles.container}>
                <Tabs>
                    {/* First tab */}
                    <View title="CURRENT" style={styles.content}>
                        <CurrentSchedule />
                    </View>
                    {/* Second tab */}
                    <View title="SCHEDULE" style={styles.content}>
                        <Schedule/>
                    </View>
                    {/* Third tab */}
                    <View title="SETTTINGS" style={styles.content}>
                        <Text style={styles.header}>
                            Ease of Learning
                    </Text>
                        <Text style={styles.text}>
                            It’s much easier to read and write comparing to native platform’s code
                    </Text>
                    </View>
                </Tabs>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    // App container
    container: {
        flex: 1,                            // Take up all screen
        backgroundColor: 'grey',         // Background color
    },
    // Tab content container
    content: {
        flex: 1,                            // Take up all available space
        justifyContent: 'center',           // Center vertically
        alignItems: 'center',               // Center horizontally
        backgroundColor: 'white',         // Darker background for content area
    },
    // Content header
    header: {
        margin: 10,                         // Add margin
        color: '#rgba(100, 100, 100, 0.75)',                   // White color
        fontFamily: 'Avenir',               // Change font family
        fontSize: 26,                       // Bigger font size
    },
    // Content text
    text: {
        marginHorizontal: 20,               // Add horizontal margin
        color: 'rgba(100, 100, 100, 0.75)', // Semi-transparent text
        textAlign: 'center',                // Center
        fontFamily: 'Avenir',
        fontSize: 18,
    },
});