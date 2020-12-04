import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs'
import React, {useState} from 'react';
import SiteForm from './SiteForm';

function NavTab() {
    const [key, setKey] = useState('home');

    
const Home = () => <span>Home</span>

const Setting = () => <span>Setting</span>;
  
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >
        <Tab eventKey="home" title="Home">
            <Home/>
        </Tab>
        <Tab eventKey="form" title="Form">
          <SiteForm />
        </Tab>
        <Tab eventKey="setting" title="Setting">
          <Setting />
        </Tab>
      </Tabs>
    );
  }


  export default NavTab;