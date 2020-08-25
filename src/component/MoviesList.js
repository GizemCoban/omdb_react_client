import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import {
  Table,
  Input,
  Button,
  Container,
  Pagination
} from "semantic-ui-react";
import MoviesTable from "./MoviesTable";

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      films: [],
      searchMovies: "pokemon",
      activePage: 1,
      pageFilms: []
    };
  }
  handlePaginationChange = (e, { activePage }) => {
    this.setState({ activePage });
    this.renderPages();
  };

  onChangeSearch = (e) => {
    this.setState({
      searchMovies: e.target.value,
    });
  };
  onClickSearch = (e) => {
    e.preventDefault();
    axios
      .get(
        `http://www.omdbapi.com/?s=${this.state.searchMovies}&apikey=db875066`
      )
      .then((response) => {
        let films = response.data.Search;
      
       films.sort((a, b) => {
          if (a.Year < b.Year) {
            return 1;
          }
          if (a.Year > b.Year) {
            return -1;
          }
          return 0;
        });
        this.setState({
          films: films,
          searchMovies: "",
          activePage: 1
        });
        this.renderPages();
      })
      .catch((error) => {
        this.props.history.push('/');
        console.log(error);
        
      });
  };
  renderPages = () => {
    let page = this.state.activePage;
    let filmList = [...this.state.films];
    if (page === 1) {
      this.setState({
        pageFilms: filmList.splice(page*5, 5)
      });
    }
    if (page === 2) {
      this.setState({
        pageFilms: filmList.splice(0, 5)
      });
    }
  }
  componentDidMount() {
    axios
      .get(
        `http://www.omdbapi.com/?s=${this.state.searchMovies}&apikey=db875066`
      )
      .then((response) => {
        let films = response.data.Search;
      
       films.sort((a, b) => {
        if (a.Year < b.Year) {
          return 1;
        }
        if (a.Year > b.Year) {
          return -1;
        }
        return 0;
      });  
        this.setState({
          films: films,
        });
        this.renderPages();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  moviesList() {
    return this.state.pageFilms.map(function (obj, i) {
        return <MoviesTable obj={obj} key={i} />;     
    });
  }

  render() {
    return (
      <Container style={{ marginTop: "4em" }}>
        <form onSubmit={this.onClickSearch}>
        <Input
          className="InputDesing"
          placeholder="Film Ara"
          onChange={this.onChangeSearch}
          value={this.state.searchMovies}
        />
        <Button
          color="purple"
          //onClick={this.onClickSearch}
          style={{ float: "right" }}
        >
          Arama
        </Button>

        </form>
    
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>IMDb ID</Table.HeaderCell>
              <Table.HeaderCell>Filmin Adı</Table.HeaderCell>
              <Table.HeaderCell>Yayınlandığı Tarih</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{this.moviesList()}</Table.Body>
        </Table>
       <Pagination
            activePage={this.state.activePage}
            onPageChange={this.handlePaginationChange}
            totalPages={2}
          />
      </Container>
    );
  }
}
export default withRouter(MoviesList);
