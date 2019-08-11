import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Quiz from './Quiz'

const mapStateToProps = state => {
	return {}
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Quiz)
