import { AppProvider, Page, LegacyCard, Avatar, Text, ResourceList, List } from '@shopify/polaris';
import React from 'react';
import {useState, useCallback} from 'react';
export default function Home (props)  {
    return (
        <AppProvider>
            <Page>
                <LegacyCard>
                <ResourceList
                    showHeader
                    items={[
                    {
                        id: '341',
                        url: '#',
                        name: 'Mae Jemison',
                        location: 'Decatur, USA',
                    },
                    {
                        id: '256',
                        url: '#',
                        name: 'Ellen Ochoa',
                        location: 'Los Angeles, USA',
                    },
                    ]}
                    renderItem={(item) => {
                    const {id, url, name, location} = item;
                    const media = <Avatar customer size="medium" name={name} />;

                    return (
                        <ResourceList.Item id={id} url={url} media={media}>
                        <Text variant="bodyMd" fontWeight="bold" as="h3">
                            {name}
                        </Text>
                        <div>{location}</div>
                        </ResourceList.Item>
                    );
                    }}
                />
                </LegacyCard>
            </Page>
        </AppProvider>
    )
}