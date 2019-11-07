import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'

import Mission from './pages/Mission'
import Missions from './pages/Missions'

const Router: React.FC = () => (
  <IonReactRouter>
    <IonRouterOutlet>
      <Route path="/missions" exact>
        <Missions />
      </Route>
      <Route path="/missions/:id" exact>
        <Mission />
      </Route>
      <Route path="/" exact>
        <Redirect to="/missions" />
      </Route>
    </IonRouterOutlet>
  </IonReactRouter>
)

export default Router
