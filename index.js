import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types'

export default class FieldSet extends Component {

    render() {
        let alignItems = this.props.labelPosition == 'center' ? 'center' : 'flex-' + this.props.labelPosition
        if (this.props.twoLabel) {
            alignItems = 'space-between'
        }
        return (
            <View style={[styles.container, { borderColor: this.props.borderColor }]}>
                <View style={[styles.labelView, { alignItems }, this.props.twoLabel ? { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } : {}]}>
                    <Text style={[styles.label, { backgroundColor: this.props.labelBackgroundColor, color: this.props.labelColor, fontSize: this.props.labelFontSize }, this.props.labelStyle]}> {this.props.label} </Text>
                    {this.props.twoLabel && <Text style={[styles.label, { backgroundColor: this.props.labelBackgroundColor, color: this.props.labelColor, fontSize: this.props.labelFontSize }, this.props.labelStyle, this.props.labelStyle2]}> {this.props.label2} </Text>}
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={styles.mainTextView}>
                        <Text style={[styles.mainText, this.props.mainTextStyle]}>
                            {this.props.children}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

FieldSet.propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    labelBackgroundColor: PropTypes.string,
    labelColor: PropTypes.string,
    borderColor: PropTypes.string,
    labelFontSize: PropTypes.number,
    labelStyle: PropTypes.object,
    labelPosition: PropTypes.oneOf(['start', 'center', 'end']),
    twoLabel: PropTypes.bool,
    label2: PropTypes.string,
    labelStyle2: PropTypes.object,
    mainTextStyle: PropTypes.object,
}

FieldSet.defaultProps = {
    labelBackgroundColor: '#fff',
    labelColor: '#000',
    label: 'FieldSet-label',
    children: <Text>FieldSet-Body</Text>,
    borderColor: '#777',
    labelFontSize: 12,
    labelStyle: {},
    labelPosition: 'start',
    twoLabel: false,
    label2: 'FieldSet 2nd label',
    labelStyle2: {},
    mainTextStyle: {}
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        borderWidth: 1.5,
        borderStyle: 'solid',
        margin: 5,
        marginTop: 10,
    },
    labelView: {
        justifyContent: 'center',
        paddingHorizontal: 7,
        height: 0
    },
    label: {
        borderRadius: 12,
        padding: 2
    },
    mainTextView: {
        margin: 0,
        zIndex: 1,
        padding: 3
    },
    mainText: {
        fontSize: 11
    }
});