import React from 'react';
import {Table, Row, Col, Typography} from 'antd';
import {useQuery, ApolloProvider} from '@apollo/client';
import {GET_PLAYERS_DATA} from '../config/query';
import client from '../config/apollo';
import 'antd/dist/antd.css';

const {Title} = Typography;

const columns = [
  {
    title: 'Player Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Position',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
  },
  {
    title: 'Team Name',
    dataIndex: ['team', 'name'],
  },
  {
    title: 'League Name',
    dataIndex: ['league', 'name'],
  },
  {
    title: 'Attacking_quality',
    dataIndex: 'attacking_quality',
  },
  {
    title: 'Defensive_quality',
    dataIndex: 'defensive_quality',
  },
  {
    title: 'Overall_quality',
    dataIndex: 'overall_quality',
  },
  {
    title: 'League_rank',
    dataIndex: 'league_rank',
  },
  {
    title: 'Overall_rank',
    dataIndex: 'overall_rank',
  },
];

const List = () => {
  const {loading, error, data} = useQuery(GET_PLAYERS_DATA);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div style={{marginTop: 50}}>
      <Row>
        <Col offset={11}>
          <Title level={2}>Player List</Title>
        </Col>
        <Col span={12} offset={5}>
          <Table dataSource={(data && data.players) || []} columns={columns} />
        </Col>
      </Row>
    </div>
  );
};

function PlayerList() {
  return (
    <ApolloProvider client={client}>
      <List />
    </ApolloProvider>
  );
}

export default PlayerList;
