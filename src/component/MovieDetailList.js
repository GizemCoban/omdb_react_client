import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Grid, Image, Icon, Label, Table } from "semantic-ui-react";

class MovieDetailList extends Component {
  render() {
    return (
      <Grid>
        <Grid.Row columns={3} style={{ height: "60px" }}>
          <Grid.Column>
            <h3>Filmin Adı</h3>
          </Grid.Column>
          <Grid.Column>
            <Icon
              disabled
              name="star"
              color="yellow"
              size="large"
              id="StarImdb"
            />
          </Grid.Column>
          <Grid.Column>
            <h3>IMDb puanı</h3>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row columns={3} style={{ height: "50px" }}>
          <Grid.Column>
            <Label style={{ position: "relative", bottom: "20px" }}>
              <Icon name="clock outline" color="red" size="large" /> Film Süresi
            </Label>
          </Grid.Column>
          <Grid.Column>
            <Label style={{ position: "relative", bottom: "20px" }}>
              <Icon name="calendar alternate" color="red" size="large" /> Filmin
              Yılı{" "}
            </Label>
          </Grid.Column>
          <Grid.Column>
            <Label style={{ position: "relative", bottom: "20px" }}>
              <Icon name="film" color="red" size="large" /> Film Türü
            </Label>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1}>
          <Grid.Column>
            <p>Filmin Posteri</p>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} style={{ height: "50px" }}>
          <Grid.Column>
            <Table className="TableBorder">
              <Table.Body>
                <Table.Row>
                  <Table.Cell style={{ fontWeight: "bold" }}>
                    Yönetmen:
                  </Table.Cell>
                  <Table.Cell>Filmin Yönetmeni</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell style={{ fontWeight: "bold" }}>
                    Oyuncular:
                  </Table.Cell>
                  <Table.Cell>Oyuncu İsimleri</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell style={{ fontWeight: "bold" }}>
                    Kısa Açıklama:
                  </Table.Cell>
                  <Table.Cell>Açıklama</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
export default withRouter(MovieDetailList);
