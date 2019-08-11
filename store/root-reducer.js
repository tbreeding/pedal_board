import { combineReducers } from 'redux'
import quizReducer from '../reducers/quiz-reducer'
export default combineReducers({
	quiz: quizReducer,
})
