import React from "react";


class Form extends React.Component {
    state = {
        firstName: '',
        email: '',
        message: '',
        select: '',
        subscription: false,
        gender: '',
    }

    handleChange = (e) => {
        // this.setState({firstName: e.target.value }) //если бы был один инпут
        this.setState({[e.target.name]: e.target.value }) //если бы был один инпут
    }

    handleCheckboxChange = (e) => {
        this.setState({[e.target.name]: e.target.checked})
    }

    validateName = () => {
        if (this.state.firstName.length <3) {
            alert('correct Name, please!')
        }
    }

    validateEmail = () => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email))
        {
          return (true)
        }
          alert("You have entered an invalid email address!")
          return (false)
    }

    render() {
        const {firstName, email, message, select, subscription, gender} = this.state

        return <div>
            <input 
                type="text" 
                name="firstName" 
                placeholder="firstName" 
                value={firstName}
                onChange={this.handleChange}
                onBlur={this.validateName}
            />
            <input 
                type="email" 
                name="email" 
                placeholder="email" 
                value={email}
                onChange={this.handleChange}
                onBlur={this.validateEmail}
            />
            <br /> <br />
            <textarea 
                name="message" 
                value={message}
                onChange={this.handleChange} >
            </textarea>
            <select name="select" value={select} onChange={this.handleChange}>
                <option value="" disabled></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <br /><br />
            <label>
            <input 
                type="checkbox" 
                name="subscription" 
                checked={subscription}
                onChange={this.handleCheckboxChange}    
            /> subscription
            </label>
            <br /><br />
            <input 
                type="radio" 
                name="gender"
                value="male"
                checked={gender==='male'}
                onChange={this.handleChange}
            /> Male
            <input 
                type="radio" 
                name="gender" 
                value="female"
                checked={gender==='female'}
                onChange={this.handleChange}
            /> Female
        </div>
    }
}

export {Form}