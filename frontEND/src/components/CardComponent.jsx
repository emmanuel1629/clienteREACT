import Card from 'react-bootstrap/Card';

function CardComponent(encabezado,titulo,contenido) {
  return (
    <>
      <Card bg={"light"}>
        <Card.Header>{encabezado}</Card.Header>
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text>
            {contenido}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardComponent;