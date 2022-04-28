import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    dashed: true;
  }
}

export const customizedMaterialStyle = {
  components: {
    MuiButton: {
      variants: [
        {
          // props: { variant: 'dashed' }, // This is failing
          props: { variant: 'dashed' as const }, // This change is fixing the problem with 'const' assertion feature of typescript
          style: {
            // textTransform: 'none', // This is failing
            textTransform: 'none' as const, // This is working with 'const' assertion feature of typescript
            // 'text-transform': 'none', // This is working too
            border: `2px dashed ${defaultTheme.palette.primary.main}`,
            color: defaultTheme.palette.primary.main,
          },
        },
      ],
    },
    MuiTable: {
      styleOverrides: {
        root: {
          // whiteSpace: 'normal', // This is failing
          whiteSpace: 'normal' as const, // This is working with 'const' assertion feature of typescript
          // 'white-space': 'normal', // This is working too
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: 'red', // This is working, I don't need to use 'const' assertion feature of typescript here.
        },
      },
    },
  },
};

export const themeObject = createTheme(customizedMaterialStyle);

function App() {
  return (
    <ThemeProvider theme={themeObject}>
      <Stack m={5} spacing={2} direction="row">
        <Button variant="contained">Default</Button>
        <Button variant="dashed">Dashed</Button>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
