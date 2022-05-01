import { createTheme, ThemeProvider } from '@mui/material/styles';

declare module '@mui/material/Chip' {
  interface ChipPropsVariantOverrides {
    square: true;
  }
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
      styleOverrides: {
        root: {
          height: '24px',
        },
        label: {
          fontSize: '12px',
          lineHeight: '16px',
          padding: '4px 8px',
        },
      },
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
