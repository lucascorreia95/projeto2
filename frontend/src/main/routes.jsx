import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'
import ReportCredits from '../report/ReportCredits'

export default props => (
    <Router history={hashHistory}>
        <Route path="/" component={Dashboard} />
        <Route path="/billingCycles" component={BillingCycle} />
        <Route path="/reportCredits" component={ReportCredits} />
        <Redirect from="*" to="/" />
    </Router>
)