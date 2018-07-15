import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './home';
import GoodbyeWorld from './goodbye';
import AdminBlogList from './admin/adminhome';
import AddPost from './admin/addpost';
import BlogList from './bloglist';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <AuthButton />
                    <Link to="/"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">HOME</button></Link>
                    <Link to="/blogs"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">Blog Posts</button></Link>
                    <Link to="/admin"><button className="btn btn-outline-dark col-md-4 shadow rounded-0 mt-2">Admin</button></Link>
                    <Link to="/goodbye"><button className="btn btn-primary float-right position-relative">Goodbye</button></Link>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <Route exact path="/" component={Home} />
                        <Route path="/blogs" component={BlogList}/>
                        <PrivateRoute path="/admin" component={AdminBlogList} />
                        <PrivateRoute path="/addpost" component={AddPost}/>
                        <PrivateRoute path="/goodbye" component={GoodbyeWorld} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;
