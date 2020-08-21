import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class RegisterCreate extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeSchoolRole = this.onChangeSchoolRole.bind(this);
        this.onChangeSchoolName = this.onChangeSchoolName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            username: '',
            password: '',
            email: '',
            schoolRole: '',
            schoolName: '',
            users: []
        }
    }

    componentDidMount() {
        this.setState({
            users: ['test user'],
            username: 'test user'
        })
    }

    onChangeUsername(e) {
     this.setState({
         username: e.target.value
     });
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
       }
       onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
       }
       onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
       }
       onChangeSchoolRole(e) {
        this.setState({
            schoolRole: e.target.value
        });
       }
       onChangeSchoolName(e) {
        this.setState({
            schoolName: e.target.value
        });
       }
onSubmit(e) {
    e.preventDefault();

    const register = {
        username: this.state.username,
        name: this.state.name,
        password: this.state.password,
        email: this.state.email,
        schoolRole: this.state.schoolRole,
        schoolName: this.state.schoolName
    }

    console.log(register)

    axios.post('http://localhost:5000/register/add', register)
     .then(res => console.log(res.data));

    window.location = '/avatar';
}
    render() {
        return (
            <div>
                <h3>Sign Up to TApp</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                        requiredclassName="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                    return <option 
                                    key={user}
                                    value={user}>{user}
                                    </option>
                                })
                            }
                        </select>
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input type="text"
                            required
                            className="form-control"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                            />
                        </div>
                            <div className="form-group">
                                <label>Name: </label>
                                <input
                                type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}/>
                            </div>
                            <div className="form-group">
                                <label>Email: </label>
                                <input
                                type="text"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}/>
                            </div>
                            <div className="form-group">
                            <label>School Name: </label>
                            <input type="text"
                            required
                            className="form-control"
                            value={this.state.schoolName}
                            onChange={this.onChangeSchoolName}
                            />
                            <div className="form-group">
                                <label>School Role: </label>
                                <input
                                type="text"
                                className="form-control"
                                value={this.state.schoolRole}
                                onChange={this.onChangeSchoolRole}/>
                            </div>
                    </div>
                    <div className="form-group">
                        <Link to='/avatar'><input type="submit" value="Register" className="btn btn-primary" /></Link>
                    </div>
                </form>
            </div>
        )
    }
}
