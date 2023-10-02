import React from "react";
export  default class Log extends React.Component
{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="container-fluid">
                <h1>user Login</h1>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text"/></dd>
                    <dt>Password</dt>
                    <dd><input type="password"/></dd>
                </dl>
                <button className="btn btn-primary">Login</button>

            </div>
        )

    }
}