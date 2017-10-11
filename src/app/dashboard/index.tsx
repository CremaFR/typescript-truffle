import * as React from 'react';
import { Card, Image } from 'semantic-ui-react';

const Dashboard = props => (
    <Card.Group className="dashboard">
        <Card href="/#/tax-calculation/welcome">
            <Card.Content>
                <Image floated='right' size='mini' src={ require( 'images/kpmg.png' ) }/>
                <Card.Header>
                    Resident Tax Calculation
                </Card.Header>
                <Card.Meta>
                    Form Calculator
                </Card.Meta>
                <Card.Description>
                    Estimate your tax due and tax liability by completing this form. Get advices on how to improve your tax calculation.
                </Card.Description>
            </Card.Content>
        </Card>
    </Card.Group>
);

export { Dashboard };
