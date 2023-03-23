import Card from 'react-bootstrap/Card';
export function ClientCard({ client }) {
    return (
        <Card style={{ width: '18rem', border: '0.2em solid lightblue' }}>
            <Card.Body>
                <Card.Title>{client.name}</Card.Title>
                <Card.Text>

                    {client.name} <br />
                    {client.surname} <br />
                    {client.email} <br />
                    {client.phone} <br />

                </Card.Text>

            </Card.Body>
        </Card>
    );
}

export default ClientCard;