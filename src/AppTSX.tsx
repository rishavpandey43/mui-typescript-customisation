import Stack from '@mui/material/Stack';

import Chip from '@mui/material/Chip';

import PayMuiThemeTSX from './payMuiThemeTSX';

function App() {
  return (
    <PayMuiThemeTSX>
      <Stack m={5} spacing={2} direction="row">
        {/* `variant` props can be extended to support new value as per Mui documentation. But unable to add new props*/}
        <Chip label="Square Chip" variant="square" />

        {/* Comment out following line to check the issue of typescript */}
        {/* <Chip label="Draft Chip" status="draft" clickable/>
        <Chip label="Processing Chip" status="processing" /> */}
      </Stack>
    </PayMuiThemeTSX>
  );
}

export default App;
