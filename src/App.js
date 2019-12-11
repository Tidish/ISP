import React from 'react';
import 'antd/dist/antd.css';
import {Layout, Typography, Form} from 'antd'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './components/User/node_modules/antd/dist/antd.css';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Home from './components/Home';
import Catalog from './components/Catalog/Catalog';
import LoginPage from './components/Login/LoginPage';
import SignupPage from './components/Signup/SignupPage';
import MovieDetailsPage from './components/Catalog/MovieDetailsPage';
import TimeTablePage from './components/TimeTable/TimeTablePage';
import ProfilePage from './components/Profile/ProfilePage';
import PlacesPage from './components/Places/PlacesPage';
import ReservationForm from './components/TimeTable/ReservationForm';
import TicketBuyForm from './components/TimeTable/TicketBuyForm';
import EditForm from './components/TimeTable/EditForm';
import AddMovie from './components/Catalog/AddMovie';
import PlacesAdd from './components/Places/PlacesAdd';
import PlacesEdit from './components/Places/PlacesEdit';
import PlacesDelete from './components/Places/PlacesDelete';
import UserPage from './components/User/UserPage';
import employees from './components/User/darbuotojai';
import EmployeesAdd from './components/User/EmployeesAdd';
import EmployeesEdit from './components/User/EmployeesEdit';
import TicketReserveForm from './components/TimeTable/TicketReserveForm';

const { Content, Footer } = Layout;
const { Text } = Typography;

const App = () => {
  return (
    <Router>
      <Layout className="layout">
        <Navigation />
        <Content>
          <Switch>
            <Route exact path="/" component={TimeTablePage} />
            <Route exact path="/movies" component={Catalog} />
            <Route path="/login" component={LoginPage} />
            <Route path="/signup" component={SignupPage} />
            <Route path="/profile" component={ProfilePage} />
            <Route path="/movies/joker" component={MovieDetailsPage} />
            <Route path="/movies/add" component={AddMovie} />
            <Route path="/places/add" component={PlacesAdd} />
            <Route path="/places/edit" component={PlacesEdit} />
            <Route path="/places/delete" component={PlacesDelete} />
            <Route path="/places" component={PlacesPage} />
            <Route path="/naudotojai/darbuotojas/pridėti" component={EmployeesAdd}/>
            <Route path="/employees/edit" component={EmployeesEdit}/>
            <Route path="/employees" component={employees} />
            <Route path="/naudotojai" component={UserPage} />
            <Route path="/timetable/:movie/:token/buy" component={TicketBuyForm}/>
            <Route path="/timetable/:movie/:token/reserve" component={TicketReserveForm}/>
            <Route path="/timetable/:movie/:token/edit" component={EditForm}/>
            <Route path="/timetable/:movie/:token" component={ReservationForm}/>
            {/* <Route path="/timetable" component={TimeTablePage} /> */}
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <Text strong>Linkomanija ©2019, Kaunas</Text>
        </Footer>
      </Layout>
    </Router>
  );
};

export default App;
