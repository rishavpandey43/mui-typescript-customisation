import {
  createTheme,
  ThemeProvider,
  ThemeOptions,
  responsiveFontSizes,
} from '@mui/material/styles';

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
export const responsiveThemeObject: ThemeOptions =
  responsiveFontSizes(themeObject);

interface PayMuiThemeType {
  children: React.ReactNode;
}

const PayMuiTheme = ({ children }: PayMuiThemeType) => (
  <ThemeProvider theme={responsiveThemeObject}>{children}</ThemeProvider>
);
export default PayMuiTheme;
