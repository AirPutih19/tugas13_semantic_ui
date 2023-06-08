import React,{Component} from "react";
import "semantic-ui-css/semantic.min.css"
import { Table,Menu,Label, Divider, Grid, Header, Icon, Search, Segment , Button, Container, Placeholder, List } from "semantic-ui-react";

class App extends Component{
  render(){
    return(
      <div>
      <br></br>
      <Container fluid>

      <Segment placeholder>
        <Grid columns={2} stackable textAlign="center">
        <Divider vertical>Or</Divider>
        <Grid.Row verticalAlign="middle">
        <Grid.Column>
            <Header icon>
              <Icon name="search"/>
                Cari document
            </Header>
            <Search placeholder="Search document..."/>
          </Grid.Column>
          <Grid.Column>
            <Header icon>
              <Icon name='pdf file outline' />
              Tambah Document Baru
            </Header>
              <Button primary>Create Document</Button>
          </Grid.Column>
        </Grid.Row>
        </Grid>
      </Segment>

      <Grid columns={3}>
        <Grid.Column width={5}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
        </Grid.Column>
        <Grid.Column width={7}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length='medium' />
                  <Placeholder.Line length='short' />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
        </Grid.Column>
        <Grid.Column width={4}>
          <h3>Website Terkait</h3>
          <List>
            <List.Item icon="linkify" content={<a href="https://www.google.com" target="blank">Google</a>}  />
            <List.Item icon="linkify" content={<a href="https://www.facebook.com" target="blank" >Facebook</a>}/>
            <List.Item icon="linkify" content={<a href="https://semantic-ui.com/" target="blank">Semantic UI</a>}/>
            <List.Item icon="linkify" content={<a href="https://niomic.id/" target="blank">Niomic</a>}/>
            <List.Item icon="linkify" content={<a href="https://react.semantic-ui.com/usage" target="blank">React</a>}/>
          </List>
        </Grid.Column>
      </Grid>
      <br></br>

      </Container>
      <Container>
      <Table celled>
    <Table.Header>
      <Table.Row textAlign="right">
        <Table.HeaderCell colSpan='2'> <Search placeholder="Search document..."/></Table.HeaderCell>
      </Table.Row>
      <Table.Row textAlign="center">
        <Table.HeaderCell>NamaDocument</Table.HeaderCell>
        <Table.HeaderCell>JenisFile</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Panduan Belajar Javascript</Label>
        </Table.Cell>
        <Table.Cell textAlign="center">PDF</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Panduan Belajar CSS</Table.Cell>
        <Table.Cell textAlign="center">PDF</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Panduan Belajar React JS</Table.Cell>
        <Table.Cell textAlign="center">PDF</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
      </Container>

    </div>
    );
  }
}

export default App;
