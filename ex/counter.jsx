import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { inc, dec, stepChanged } from './counterActions '


const Counter = props => (
	<div>OK</div>
)
const mapDispatchToProps = 
	dispatch => bindActionCreators({
		inc,
		dec,
		stepChanged
	}, dispatch)

export default Counter