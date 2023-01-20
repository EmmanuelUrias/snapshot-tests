import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function GitHubCard() {
    return (
        <Card className='mx-auto' border='dark' style={{ width: '18rem', marginTop: '100px' }}>
          <Card.Img variant="top" src="./images (1).png" alt='User Image' />
          <Card.Body style={{margin: '17px'}}>
            <Card.Title>Marshall Mathers</Card.Title>
            <Card.Text>
              A famous rapper that goes by the name Eminem but also loves to professionally code by console.logging 'hello, world'
            </Card.Text>
          </Card.Body>
        </Card>
      );
}

export default GitHubCard