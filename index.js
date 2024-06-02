import { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import PropTypes from 'prop-types'

export default class FieldSet extends Component {

    render(props) {
        let alignItems = props.labelPosition == 'center' ? 'center' : 'flex-' + props.labelPosition
        if (props.twoLabel) {
            alignItems = 'space-between'
        }
        return (
            <View style={[styles(props).container, { borderColor: props.borderColor }]}>
                <View style={[styles(props).labelView, { alignItems }, props.twoLabel ? { alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' } : {}]}>
                    <Text style={[styles(props).label, { backgroundColor: props.labelBackgroundColor, color: props.labelColor, fontSize: props.labelFontSize }, props.labelStyle]}> {props.label} </Text>
                    {props.twoLabel && <Text style={[styles(props).label, { backgroundColor: props.labelBackgroundColor, color: props.labelColor, fontSize: props.labelFontSize }, props.labelStyle, props.labelStyle2]}> {props.label2} </Text>}
                </View>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <View style={styles(props).mainTextView}>
                        <Text style={[styles(props).mainText, props.mainTextStyle]}>
                            {props.children}
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

const styles = (props) => StyleSheet.create({
    container: {
        borderWidth: 1.5,
        borderRadius: 12,
        border: `1.5 solid ${props.borderColor}`,
        marginTop: 10,
    },
    labelView: {
        justifyContent: 'center',
    },
    label: {
        elevation: 1000,
        borderRadius: 12,
        padding: 2
    },
    mainTextView: {
        margin: 0,
        zIndex: 1,
        paddingTop: 1,
        paddingBottom: 1,
    },
    mainText: {
        fontSize: 11
    }
});