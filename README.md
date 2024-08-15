# FieldSet

## Installation
```
npm install @njtd/react-native-fieldset
```
## Usage: 
```javascript
import FieldSet from 'react-native-fieldset';
import { View, Text } from 'react-native';

//...
  return (
    <View>
      <FieldSet label="Fieldset label">
        <Text>Field Set Body</Text>
      </FieldSet>
    </View>
  );
//...
```
## See it in action
[svg.njtd.xyz](https://svg.njtd.xyz)

## Api Reference
  Property | Type | Default | Description | Required
 :--- | :---: | :--- | :---: | :---:
`label` | String | `"FieldSet-label"` | Label for fieldset | Yes
`labelBackgroundColor` | String | '#fff' | Background colour for label View | No
`labelColor` | String | '#000' | Text colour of label | No
`children`  | React Node | ```<Text>FieldSet-Body</Text>``` | Things to render inside fieldset | Yes
`borderColor` | String | '#777' | Colour of border of fieldset | No
`labelFontSize` | Number | 12 | Font size of label | No
`labelStyle` | Object | '{}' | Style of label text | No
`labelPosition` | String(enum) | 'start'| Position of label  'start', 'center', 'end' | No
`twoLabel` | Boolean | false | Labels at both sides? | No
`label2` | String | `"Fieldset-label2"` | Second label | No
`labelStyle2` | Object | '{}' | Style of second label | No
`mainTextStyle` | Object | '{}' | Style of main text | No

## Contact me:

Email: [nj@njtd.xyz](mailto:nj@njtd.xyz?subject=React%20Native%20Fieldset%20Enquiry)

Website: [njtd.xyz](https://www.njtd.xyz)