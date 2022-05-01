import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    square: true;
  }
  // ! below line throwing error
  // interface ChipProps {
  //   status?: 'draft' | 'processing';
  // }
}

export const themeObject = createTheme({
  components: {
    MuiChip: {
      variants: [
        {
          props: { variant: 'square' },
          style: {
            borderRadius: '4px',
          },
        },
        // ! uncomment the below code to demonstrate the issue of typescript.
        // {
        //   props: { status: 'draft' },
        //   style: {
        //     color: '#2D9CDB',
        //     backgroundColor: '#EBF6FF',
        //   },
        // },
        // {
        // {
        //   props: { status: 'processing' },
        //   style: {
        //     color: '#F2994A',
        //     backgroundColor: '#FEF5ED',
        //   },
        // },
      ],
    },
  },
});

interface PayMuiThemeType {
  children: React.ReactNode;
}

const PayMuiThemeTSX = ({ children }: PayMuiThemeType) => (
  <ThemeProvider theme={themeObject}>{children}</ThemeProvider>
);

export default PayMuiThemeTSX;
