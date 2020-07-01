import React, { Suspense, lazy } from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'

const p1 = lazy(() => import('./pages/p1'))
const p2 = lazy(() => import('./pages/p2'))
const p3 = lazy(() => import('./pages/p3'))
const p4 = lazy(() => import('./pages/p4'))
const p5 = lazy(() => import('./pages/p5'))
const p6 = lazy(() => import('./pages/p6'))
const p7 = lazy(() => import('./pages/p7'))
const p8 = lazy(() => import('./pages/p8'))
const p9 = lazy(() => import('./pages/p9'))
const p10 = lazy(() => import('./pages/p10'))

export default () => (
  <HashRouter>
    <Suspense fallback={<div />}>
      <Switch>
        <Route exact path='/' component={p1} />
        <Route path='/p2' component={p2} />
        <Route path='/p3' component={p3} />
        <Route path='/p4' component={p4} />
        <Route path='/p5' component={p5} />
        <Route path='/p6' component={p6} />
        <Route path='/p7' component={p7} />
        <Route path='/p8' component={p8} />
        <Route path='/p9' component={p9} />
        <Route path='/p10' component={p10} />
      </Switch>
    </Suspense>
  </HashRouter>
)
