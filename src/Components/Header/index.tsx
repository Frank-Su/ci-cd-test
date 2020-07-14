import React from 'react';
import { Row, Col } from 'antd';
import style from './style.scss';

const Header = (): JSX.Element => {
    const getId = () => {
        const dom = document.querySelector('.some');
        console.log('dom', dom);
    };
    return (
        <Row>
            <Col md={5} className={style.some}>
                12312312312312312123123321
            </Col>
            <button onClick={getId}></button>
            <Col md={5}>12312312312312312123123321</Col>
            <Col md={5}>12312312312312312123123321</Col>
        </Row>
    );
};

export default Header;
