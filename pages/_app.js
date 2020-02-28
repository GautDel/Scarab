import React, { useContext } from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { TimeProvider } from "../context/TimeContext";
import { ModeProvider}  from "../context/ModeContext";
import { ModeContext }  from "../context/ModeContext";
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import darkTheme from '../src/darkTheme';


export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Scarab</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>

          {/* ModeProvider and ModeContext is  used for providing ligh / dark theme to ThemeProvider */}
            <ModeProvider>
                <ModeContext.Consumer>
                    {props => {
                        return (
                            <ThemeProvider theme={props.isDark ? darkTheme : theme}>
                                {/* CssBaseline kickstart an elegant, consistent, 
                                and simple baseline to build upon. */}
                                <CssBaseline />

                                <TimeProvider>
                                    <Component {...pageProps} />
                                </TimeProvider>

                            </ThemeProvider>
                        )}}
                </ModeContext.Consumer>
            </ModeProvider>
     </>
    );
  }
}
