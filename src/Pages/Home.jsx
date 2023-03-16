import Navigation from "../Layouts/Navigation"
import {TitleBar} from '@shopify/app-bridge-react'
import {useAppBridgeState} from '@shopify/app-bridge-react';
import {Button} from '@shopify/app-bridge/actions';
export default function Home({app}) {
      const appState = useAppBridgeState('staffMember');
      const MyButton = Button.create(app, {label: 'Save'});
      console.log(appState)
      return (
            <div>
                  <TitleBar title="Home"/>
                  <MyButton />
                  <Navigation />
                  <h1>Home</h1>
            </div>
            
      )
}