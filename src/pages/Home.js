import { Page, AlphaCard, AppProvider } from '@shopify/polaris';
import {TitleBar} from '@shopify/app-bridge'
import React from 'react';

export default function Home ()  {
    const primaryAction = {content: 'Foo', url: '/foo'};
    const secondaryActions = [{content: 'Bar', url: '/bar', loading: true}];
    const actionGroups = [{title: 'Baz', actions: [{content: 'Baz', url: '/baz'}]}];
    return (
        <div>
            <h1>sss</h1>
        </div>
    )
}