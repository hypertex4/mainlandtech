import React, { Component } from "react";

export default class CustomInput extends Component {
    render() {
        const { input: { value, onChange } } = this.props;
        return(
            <div className="input-field col s12">
                <textarea 
                    name={this.props.name} 
                    id={this.props.id}
                    className="materialize-textarea"
                    type={this.props.type}
                    value = {value}
                    onChange={ onChange }
                    required={this.props.required}  ></textarea>
                <label htmlFor={this.props.id}>{this.props.label}</label>

            </div>
        );
    }
}