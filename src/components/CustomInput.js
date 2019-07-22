import React, { Component } from "react";

export default class CustomInput extends Component {
    render() {
        const { input: { value, onChange } } = this.props;
        return(
            <div className="input-field col s6">
                <input 
                    name={this.props.name} 
                    id={this.props.id}
                    className="validate"
                    type={this.props.type}
                    value = {value}
                    onChange={ onChange }
                    required = {this.props.required} 
                />
                <label htmlFor={this.props.id}>{this.props.label}</label>

            </div>
        );
    }
}