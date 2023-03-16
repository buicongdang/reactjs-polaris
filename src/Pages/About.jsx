import Navigation from "../Layouts/Navigation"
import {TitleBar} from '@shopify/app-bridge-react'
export default function About() {
      return (
            <div>
                  <TitleBar title="About"/>
                  <Navigation />
                  <h1>About</h1>
            </div>
            
      )
}