import ListGroup from 'react-bootstrap/ListGroup';

function PanelAdminForm() {
    return (
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                Listado de reportes
            </ListGroup.Item>
            <ListGroup.Item as="li">Listado de usuarios</ListGroup.Item>
        </ListGroup>
    );
}

export default PanelAdminForm;