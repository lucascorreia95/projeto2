import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { getList } from './ReportCreditsActions'

class Button extends Component {
    render() {
        return(
            <button className="btn btn-primary"
                onClick={() => this.props.getList(this.props.month, this.props.year)}>
                Buscar
            </button>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({getList}, dispatch)
const mapStateToProps = state => ({month: state.reportCredits.month, year: state.reportCredits.year})
export default connect(mapStateToProps, mapDispatchToProps)(Button)