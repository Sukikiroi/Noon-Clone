import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react"
import Personelinformation from './Personelinformation'
import Changepassword from './changepassowrd'

function Editprofile() {
    return (
      <div>

<Tabs isFitted variant="enclosed">
  <TabList mb="1em">
    <Tab>Personal Information</Tab>
    <Tab>Change Password</Tab>
    <Tab>Address Book</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Personelinformation/>
    </TabPanel>
    <TabPanel>
      <Changepassword/>
    </TabPanel>
    <TabPanel>
      <p>Address Book!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

      </div>
    );
  }
  
  export default Editprofile;