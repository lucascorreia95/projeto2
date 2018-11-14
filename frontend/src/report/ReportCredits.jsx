import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from '../common/tab/tabs'

import Button from './ReportCreditsButton'

class ReportCredits extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Ciclos de Pagamento" small="Relatorio de Creditos" />
                <Content>
                    <Tabs>
                        <Button/>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default ReportCredits