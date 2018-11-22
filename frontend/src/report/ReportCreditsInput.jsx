import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { changeDescription } from './ReportCreditsActions'
import { connect } from 'react-redux'

class Input extends Component {
    render() {
        return(
            <div>
                <label>{this.props.label}</label>
                <input
                    className='form-control'
                    type={this.props.inputType}
                    onChange={(event) => this.props.changeDescription(event,this.props.type)} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({changeDescription}, dispatch)
export default connect(null, mapDispatchToProps)(Input)