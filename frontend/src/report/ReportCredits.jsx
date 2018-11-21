import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'

import Input from './ReportCreditsInput'
import Button from './ReportCreditsButton'
import ReportCreditsList from './ReportCreditsList'

class ReportCredits extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamento" small="Relatorio de Creditos" />
                <Content>
                    <Tabs>
                        <Input />
                        <Button/>
                        <ReportCreditsList/>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default ReportCredits