import React from 'react'
import { Box, Typography, Container } from '@material-ui/core'

import Quiz from '../components/Quiz'

export default function Index() {
	return (
		<Container maxWidth='sm'>
			<Quiz />
		</Container>
	)
}
