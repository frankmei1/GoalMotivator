import React from 'react';
import './App.css';



import GroupCardList from './components/groupCardList/groupCardList.js';
import groupData from './assets/groupData.js'
import Header from './components/header.js'
import Home from './components/home.js'
import MyProfile from './components/myProfile.js'
import SubGroupCard from './components/subGroupCard.js'
import JoinGroup from './components/joinGroup.js'

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header title="GroupMotivator" sections={sections} />
      <BrowserRouter>
          <div>
            <Switch>
             <Route path="/groups" render={ ()=> <GroupCardList data={groupData}/> }/>
             <Route path="/home" render={ ()=> <Home post={"groupData"}/>}/>
             <Route path="/myProfile" render={ ()=> <MyProfile post={"groupData"}/>}/>
             <Route path='/learn more' component = {SubGroupCard}/>    
             <Route path='/joinGroup'render={ ()=> <JoinGroup post={"groupData"}/>}/>    
             <Route path="/" render={ ()=> <Home post={"groupData"}/>}/>
             <Route component={Error}/>
           </Switch>
        </div>
        </BrowserRouter>
    </div>
  );
}


const sections = [
  { title: 'Home', url: '/home' },
  { title: 'About Us', url: '#' },//app intro, might be merged to "home" tab
  { title: 'Challenges', url: '/groups' },
  { title: 'My Profile', url: '/myProfile' },
  { title: 'Joined Group', url: '/joinGroup' },
  { title: 'Setting', url: '#' }
];

export default App;
