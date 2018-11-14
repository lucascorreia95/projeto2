import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './ReportCreditsActions'

class Button extends Component {
    render() {
        return(
            <button className="btn btn-primary"
                onClick={this.props.getList}>
                Buscar
            </button>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
export default connect(null, mapDispatchToProps)(Button)