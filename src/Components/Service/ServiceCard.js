import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./service.css"
function ServiceCard(props) {
  return (
    <Card style={{ width: '18rem' }} className='transition-div'>

      <Card.Body>
        <Card.Title className='transition-div'>{props.Name}</Card.Title>
        <Card.Text>
          {props.ROllNo}
        </Card.Text>
        <Card.Text>
          {props.adress}
        </Card.Text>                                                                    

      </Card.Body>
    </Card>
  );
}

export default ServiceCard;