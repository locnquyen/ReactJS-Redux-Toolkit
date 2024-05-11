import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserTable from './user.table';

function TabsContent() {
  return (
    <Tabs
      defaultActiveKey="user"
      id="uncontrolled-tab-example"
      className="mb-3 mt-3"
    >
      <Tab eventKey="user" title="User">
        <UserTable/>
      </Tab>
      <Tab eventKey="blog" title="Blog">
        Tab content for Profile
      </Tab>
      
    </Tabs>
  );
}

export default TabsContent;