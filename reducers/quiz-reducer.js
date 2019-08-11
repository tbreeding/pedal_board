import { TEST_ACTION } from '../lib/const/actions'

const initialState = {}

const quizReducer = (state = initialState, action) => {
	switch (action.type) {
		case TEST_ACTION:
			console.log(TEST_ACTION)
			return state
		default:
			return state
	}
}

export default quizReducer
