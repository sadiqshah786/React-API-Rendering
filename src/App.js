import { useEffect, useState } from 'react';
import './App.css';
import Loader from './Loader';
import { Card, Col, Row, Avatar } from 'antd';
const { Meta } = Card;
function App() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const data = await fetch("https://jsonplaceholder.typicode.com/comments")
    const get = await data.json()
    setUsers(get)
    setTimeout(() => {
      setLoading(false);
    }, 1000)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

    !loading ? <Row>
      {
        users.map((data, index) => {
          return (
            <Col style={{ margin: 20 }}>
              <div className="site-card-border-less-wrapper">
                <Card
                  title={data.email}
                  bordered={false}
                  style={{
                    width: 300,
                  }}
                >
                  <p>{data.body}</p>

                </Card>
              </div>
            </Col>
          )
        })
      }
    </Row> : <Row>
      {
        users.map(() => {
          return (
            <Col style={{ margin: 20 }}>
              <Card
                style={{
                  width: 300,
                  marginTop: 16,
                }}
                loading={loading}
              >
                <Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title="Card title"
                  description="This is the description"
                />
              </Card>
            </Col>
          )
        })
      }
    </Row>





  )
}

export default App;
