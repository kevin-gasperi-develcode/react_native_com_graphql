import { gql, useQuery } from '@apollo/client'
import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Container, TextTitle } from './styles';

interface Country {
    name: String;
    code: String;
    capital: String;
}

const QUERY = gql`
    query {
        countries {
            name 
            code
            capital
        }
    }
`

const Country = ({ item }: { item: Country }) => {
    return (
        <Container>
            <TextTitle>Name: {item.name}</TextTitle>
            <Text>Code: {item.code}</Text>
            <Text>Capital: {item.capital}</Text>

        </Container>
    );
};

export default function Home() {
    const { data } = useQuery(QUERY)
    return (
        <View>
            <FlatList
                data={data?.countries}
                renderItem={Country}
            />
        </View>
    )
}