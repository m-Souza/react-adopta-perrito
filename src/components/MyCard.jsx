import Card from 'react-bootstrap/Card';
import Tag from './Tag';

const MyCard = ({src='#', dogName='Nombre del perro', dogDescription = 'Descripción del perro', tagColor, tagText}) => {
    return(
        <>
            <Card style={{ width: "18rem", alignContent:"space-between" }}>
                <Card.Img variant="top" src={src}/>
                <Card.Body>
                    <Card.Title>{dogName}</Card.Title>
                    <Card.Text>
                    {dogDescription}
                    </Card.Text>
                </Card.Body>
                <Tag bgColor={tagColor} tagText={tagText} />
            </Card>

        </>
    )
}

export default MyCard