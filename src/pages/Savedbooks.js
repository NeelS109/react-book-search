import React, { Component} from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API"
import Card from "../components/Card";
import SavedBook from "../components/SavedBook";


class Savedbooks extends Component {

    state = {
        books : []
    };

    componentDidMount = () => {
        this.loadBooks();
    }

    handleDelete = (id) => {
        API.deleteBook(id)
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
    
    loadBooks = () => {
        API.findBooks()
        .then(res => {
            this.setState({
                books : res.data
            })
        })
        .catch(err => console.log(err));
    }


    render(){
        return(
            <Container fluid>
            <Row fluid>
                <Col size="12">
                    <Jumbotron>
                        <h1>Google Books Search</h1>
                        <p>Search for books and save them for future reference!</p>
                    </Jumbotron>
                </Col>
            </Row>
            
            <Row fluid>
                <Col size="md-12">
                    {this.state.books.length ? (
                    <Card heading="Saved Books">
                        {this.state.books.map(book => (
                        <SavedBook
                            key={book._id}
                            title = {book.title}
                            authors = {book.authors}
                            image = {book.image}
                            description = {book.description}
                            link = {book.link}
                            handleDelete = {()=> this.handleDelete(book._id)}
                        />
                        ))}
                    </Card>
                    ) : (
                    <Card heading="Saved Books"></Card>
                    )}
                </Col>
            </Row>
                
        </Container>
        );
    }
}

export default Savedbooks;