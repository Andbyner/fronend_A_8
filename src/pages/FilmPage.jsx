import { Container, Row, Col } from "react-bootstrap";
import imgFilm1 from "../assets/images/GoodBoy.png";
import imgFilm2 from "../assets/images/GoodFortune.png";
import imgFilm3 from "../assets/images/TukarTakdir.png";

const FilmPage = () => {
    return (
        <>
            <Container className="mt-5">
                {/* Tambahan Card Kanan-Kiri */}
                <Row className="mt-5">
                    <Col md={5}>
                        <img
                            src={imgFilm1}
                            className="img-fluid mx-auto rounded shadow"
                            alt="Bakery 1"
                        />
                    </Col>
                    <Col md={7}>
                        <h1><strong>GOOD BOY</strong></h1>
                        <p className="lead">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={5}>
                        <img
                            src={imgFilm2}
                            className="img-fluid mx-auto rounded shadow"
                            alt="Bakery 1"
                        />
                    </Col>
                    <Col md={7}>
                        <h1><strong>GOOD FORTUNE</strong></h1>
                        <p className="lead">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col md={5}>
                        <img
                            src={imgFilm3}
                            className="img-fluid mx-auto rounded shadow"
                            alt="Bakery 1"
                        />
                    </Col>
                    <Col md={7}>
                        <h1><strong>TUKAR TAKDIR</strong></h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi esse distinctio placeat ipsum sapiente modi ad expedita qui, natus unde hic exercitationem facere fugiat nesciunt iste eaque, eveniet odio libero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias hic velit earum. Necessitatibus aperiam optio inventore quas sint commodi, voluptas aliquam maiores! Facere praesentium eaque odit sint. Ducimus, culpa fugiat Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis molestiae vitae eius eveniet magnam ex, beatae enim sequi facilis, voluptates totam reprehenderit eligendi in aliquam assumenda. Velit minima fugiat consequuntur!
                        </p>
                    </Col>
                </Row>

                {/* Akhir Tambahan Card */}
                
                <Row className="mt-5 mb-5" />
            </Container>
        </>
    );
};

export default FilmPage;
