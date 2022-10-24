import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

import React, {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
})


const AppMain = () => {
    return (
        <ApolloProvider client={client}>
            <App/>
        </ApolloProvider>
    )
}

AppRegistry.registerComponent(appName, () => AppMain);
