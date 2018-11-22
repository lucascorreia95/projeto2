import React, { Component } from 'react'
import { connect } from 'react-redux'

class ReportList extends Component {
    render() {
        if (this.props.reportCredits.length) {
            return(
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Mes</th>
                                <th>Ano</th>
                                <th>Nome</th>
                                <th>Valor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderList()}
                        </tbody>
                    </table>
                </div>
            )
        } else if (this.props.click) {
            return <h3>Nenhum Credito Encontrado!</h3>
        } else{
            return null
        }
    }
    
    renderList() {
        const list = this.props.reportCredits || []
        
        let listCredits = []
        let credit= {
            name: "",
            valor: "",
            mes: "",
            ano:""
        }
        
        list.map((item) => {
            for (var i = 0; i < item.credits.length; i++) {
                credit = {
                    name:item.credits[i].name,
                    valor:item.credits[i].value,
                    mes: item.name,
                    ano: item.year
                }
                
                listCredits.push(credit)

            }
        })
        return listCredits.map((item, index) => (
            <tr key={index}>
                <td>{item.mes}</td>
                <td>{item.ano}</td>
                <td>{item.name}</td>
                <td>{item.valor}</td>
            </tr>
        ))
    }
}

const mapStateToProps = state => ({reportCredits: state.reportCredits.list, click: state.reportCredits.click})
export default connect(mapStateToProps, null)(ReportList)