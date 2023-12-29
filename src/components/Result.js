import { Card, CardHeader, CardBody, Heading, Text, Grid } from '@chakra-ui/react';

function Result({ task, results }) {
    const resultData = results[`${task} Results`];

    return (
        <Grid autoFlow="column dense" mt={10} paddingLeft={5} paddingRight={5}>
            <Card>
                <CardHeader>
                    <Heading size='md'>{task} Diagnosis Result</Heading>
                </CardHeader>
                <CardBody textAlign={'left'}>
                    {Object.entries(resultData).map(([key, value], index) => (
                        <Text key={index}>
                            <strong>{key}:</strong> {value}
                        </Text>
                    ))}
                </CardBody>
            </Card>
        </Grid>
    );
}

export default Result;

