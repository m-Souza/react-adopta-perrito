import Badge from 'react-bootstrap/Badge';

const Tag = (props) => {
    return(
        <>
            <Badge bg={props.bgColor} >{props.tagText}</Badge>
        </>
    )
}

export default Tag