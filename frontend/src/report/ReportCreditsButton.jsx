import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './ReportCreditsActions'

class Button extends Component {
    render() {
        return(
            <button className="btn btn-primary"
                onClick={() => this.props.getList(this.props.description)}>
                Buscar
            </button>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
const mapStateToProps = state => ({description: state.reportCredits.description})
export default connect(mapStateToProps, mapDispatchToProps)(Button)