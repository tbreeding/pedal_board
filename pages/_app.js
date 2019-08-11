import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import { Provider } from 'react-redux'
import withRedux from 'next-redux-wrapper'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'
import makeStore from '../store'

class MyApp extends App {
	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles)
		}
	}

	static async getInitialProps(props) {
		const appProps = {}
		const { Component, ctx } = props
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
		// if (ctx.res) {}
		return { pageProps, appProps }
	}

	render() {
		const { Component, pageProps, store, appProps } = this.props

		return (
			<Container>
				<Head>
					<title>My page</title>
				</Head>
				<Provider store={store}>
					<ThemeProvider theme={theme}>
						{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
						<CssBaseline />
						<Component {...pageProps} {...appProps} />
					</ThemeProvider>
				</Provider>
			</Container>
		)
	}
}

export default withRedux(makeStore)(MyApp)
