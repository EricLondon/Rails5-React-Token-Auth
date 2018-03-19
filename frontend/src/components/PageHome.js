import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

class PageHomeComponent extends React.Component {

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} md={12}>
            Home
          </Col>
        </Row>
      </Grid>
    )
  }

  constructor(props) {
    super(props)
  }

}

export default PageHomeComponent
