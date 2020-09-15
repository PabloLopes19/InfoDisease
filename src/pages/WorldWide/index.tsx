import React from 'react';

import { Container, Content, InputArea, InputText } from './styles';
// import 'bootstrap/dist/css/bootstrap.css';

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Select from 'react-select';

const WorldWide: React.FC = () => {
  const options = [
    { value: 'cn', label: 'China' },
    { value: 'cn', label: 'China' },  
    { value: 'cn', label: 'China' },
    { value: 'cn', label: 'China' },
    { value: 'cn', label: 'China' },
  ];

  return (
    <Container>
      <Header />
        <Content>
          <InputArea>
            <Select options={options}>
              <option key="cn">Brasil</option>
              <option>China</option>
              <option>USA</option>
            </Select>
            <InputText>
              <option key="cn">Brasil</option>
              <option>China</option>
              <option>USA</option>
            </InputText>
          </InputArea>
        </Content>
      <Footer />
    </Container>
  );
}

export default WorldWide;