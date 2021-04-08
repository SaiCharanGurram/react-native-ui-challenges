import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 368 368" {...props}>
      <Path d="M301.656 50.344l-48-48A7.979 7.979 0 00248 0H88C74.768 0 64 10.768 64 24v320c0 13.232 10.768 24 24 24h192c13.232 0 24-10.768 24-24V56c0-2.12-.84-4.16-2.344-5.656zM288 344c0 4.416-3.592 8-8 8H88c-4.408 0-8-3.584-8-8V24c0-4.408 3.592-8 8-8h156.688L288 59.312V344z" />
      <Path d="M248 208H120c-4.416 0-8 3.576-8 8v96c0 4.424 3.584 8 8 8h128c4.416 0 8-3.576 8-8v-96c0-4.424-3.584-8-8-8zm-8 96H128v-80h112v80zM248 160H120c-4.416 0-8 3.584-8 8s3.584 8 8 8h128c4.416 0 8-3.584 8-8s-3.584-8-8-8z" />
    </Svg>
  );
}

export default SvgComponent;
