import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReportList extends Component {
    render() {
        return(
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mes</th>
                            <th>Ano</th>
                            <th className="table-actions">Acoes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderList()}
                    </tbody>
                </table>
            </div>
        )
    }

    renderList() {
        const list = this.props.reportCredits || []
        let listCredits = [
            {
                name:"",
                valor:""
            }
        ]
        list.map((item, index) => {
            for (var i = 0; i < item.credits.length; i++) {
                console.log(item.credits[i].name)
                    
                listCredits.push(credit)
            }
        })
        console.log(listCredits)
        return listCredits.map((item, index) => (
            <tr key={index}>
                <td>{item}</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
            </tr>
        ))
    }
}

const mapStateToProps = state => ({reportCredits: state.reportCredits.list})
export default connect(mapStateToProps, null)(ReportList)