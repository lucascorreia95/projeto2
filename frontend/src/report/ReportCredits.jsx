import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'

import Input from './ReportCreditsInput'
import Button from './ReportCreditsButton'
import ReportCreditsList from './ReportCreditsList'

class ReportCredits extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamento" small="Relatorio de Creditos" />
                <Content>
                    <div className= "report__container">
                        <h2>Busque os Creditos por Nome do Mes e/ou Ano</h2>
                        <Input type="MONTH_CHANGED" label="Mes" inputType="text" />
                        <Input type="YEAR_CHANGED" label="Ano" inputType="number" />
                        <Button/>
                        <ReportCreditsList/>
                    </div>
                </Content>
            </div>
        )
    }
}

export default ReportCredits