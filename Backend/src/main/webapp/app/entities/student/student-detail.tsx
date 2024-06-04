import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './student.reducer';

export const StudentDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const studentEntity = useAppSelector(state => state.student.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="studentDetailsHeading">
          <Translate contentKey="backendApp.student.detail.title">Student</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{studentEntity.id}</dd>
          <dt>
            <span id="cin">
              <Translate contentKey="backendApp.student.cin">Cin</Translate>
            </span>
          </dt>
          <dd>{studentEntity.cin}</dd>
          <dt>
            <span id="numCarteEtud">
              <Translate contentKey="backendApp.student.numCarteEtud">Num Carte Etud</Translate>
            </span>
          </dt>
          <dd>{studentEntity.numCarteEtud}</dd>
          <dt>
            <span id="email">
              <Translate contentKey="backendApp.student.email">Email</Translate>
            </span>
          </dt>
          <dd>{studentEntity.email}</dd>
          <dt>
            <span id="lastName">
              <Translate contentKey="backendApp.student.lastName">Last Name</Translate>
            </span>
          </dt>
          <dd>{studentEntity.lastName}</dd>
          <dt>
            <span id="firstName">
              <Translate contentKey="backendApp.student.firstName">First Name</Translate>
            </span>
          </dt>
          <dd>{studentEntity.firstName}</dd>
          <dt>
            <span id="classId">
              <Translate contentKey="backendApp.student.classId">Class Id</Translate>
            </span>
          </dt>
          <dd>{studentEntity.classId}</dd>
        </dl>
        <Button tag={Link} to="/student" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/student/${studentEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default StudentDetail;