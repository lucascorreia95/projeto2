import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { changeDescription } from './ReportCreditsActions'
import { connect } from 'react-redux'

class Input extends Component {
    render() {
        return(
            <input
                className='form-control'
                onChange={this.props.changeDescription} />
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({changeDescription}, dispatch)
export default connect(null, mapDispatchToProps)(Input)