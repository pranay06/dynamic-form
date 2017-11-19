
import { Aztec } from 'react-aztec';
import * as MUI from 'material-ui';
// Refer JSON data on the right side column
// import JSONData from 'src/path';

class AutoComplete extends React.Component {
  render() {
    
    var JSONData = [
    	{
    		id: "caseinsensitive",
    		type: "autocomplete",
    		props: {
    			id: "caseinsensitive",
    			floatingLabelText: "Type r, case insensitive",
    			datasource: [
    				"Red",
					"Orange",
					"Yellow",
					"Green",
					"Blue",
					"Purple",
					"Black",
					"White"
    			],
    			filter: "caseinsensitiveFilter",
    			value: "",
    			errorText: ""
    		}
    	}
    ];




    return (
      <div>
        <Aztec
          guid="autocomplete"
          data={JSONData}
          library={MUI}
        />
      </div>
    )
  }
}
    