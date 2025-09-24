import React from 'react';
import { 
  Container, 
  Header, 
  Segment, 
  Grid, 
  Card, 
  Image, 
  Button,
  Icon,
  Divider,
  Message
} from 'semantic-ui-react';

const HomePage = (props) => {
  return (
    <Container style={{ marginTop: '2em' }}>
      {/* ヘッダーセクション */}
      <Segment inverted color='teal' textAlign='center' style={{ padding: '4em 0em' }}>
        <Header as='h1' inverted>
          <Icon name='climbing' />
          ボルダリングアプリ(bbb) - 更新済み
        </Header>
        <Header as='h2' inverted>
          ようこそ！あなたのクライミングライフをサポートします
        </Header>
      </Segment>

      <Grid stackable columns={2} style={{ marginTop: '2em' }}>
        {/* ログイン情報セクション */}
        <Grid.Column>
          <Segment>
            <Header as='h3' color='teal'>
              <Icon name='user circle' />
              ログイン情報
            </Header>
            <Message info>
              <Message.Header>ログインしてもっと楽しもう！</Message.Header>
              <p>ログインすると、お気に入りのジムを保存したり、クライミング記録を管理できます。</p>
            </Message>
            <Button primary fluid>
              <Icon name='sign in' />
              ログイン
            </Button>
            <Divider />
            <Button secondary fluid>
              <Icon name='signup' />
              新規登録
            </Button>
          </Segment>
        </Grid.Column>

        {/* ピックアップジムセクション */}
        <Grid.Column>
          <Segment>
            <Header as='h3' color='teal'>
              <Icon name='star' />
              ピックアップジム
            </Header>
            <Card.Group>
              <Card>
                <Image src='https://via.placeholder.com/290x160?text=Climbing+Gym+1' wrapped ui={false} />
                <Card.Content>
                  <Card.Header>クライミングジム東京</Card.Header>
                  <Card.Meta>
                    <span className='date'>渋谷区</span>
                  </Card.Meta>
                  <Card.Description>
                    初心者から上級者まで楽しめる都内人気のボルダリングジム
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Button basic color='teal' fluid>
                    <Icon name='eye' />
                    詳細を見る
                  </Button>
                </Card.Content>
              </Card>
            </Card.Group>
          </Segment>
        </Grid.Column>
      </Grid>

      {/* 機能紹介セクション */}
      <Segment style={{ marginTop: '2em' }}>
        <Header as='h3' color='teal' textAlign='center'>
          <Icon name='settings' />
          主な機能
        </Header>
        <Grid stackable columns={3}>
          <Grid.Column textAlign='center'>
            <Icon name='map marker alternate' size='huge' color='teal' />
            <Header as='h4'>ジム検索</Header>
            <p>お近くのボルダリングジムを簡単に見つけられます</p>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Icon name='chart line' size='huge' color='orange' />
            <Header as='h4'>記録管理</Header>
            <p>クライミングの成果や進歩を記録・管理できます</p>
          </Grid.Column>
          <Grid.Column textAlign='center'>
            <Icon name='users' size='huge' color='purple' />
            <Header as='h4'>コミュニティ</Header>
            <p>他のクライマーと情報交換や交流ができます</p>
          </Grid.Column>
        </Grid>
      </Segment>
    </Container>
  );
};

export default HomePage;
