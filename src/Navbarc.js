import Navbar from 'react-bootstrap/Navbar'

const Navbarc = () => {
    return (
        <div>
            <Navbar className="color-nav" variant="light">
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </div>  
    );
}
 
export default Navbarc;