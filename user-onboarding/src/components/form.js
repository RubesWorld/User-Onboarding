import React from 'react'


export default function Form(props) {
const { values, submit, change,disabled,errors } = props;

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    };

    const onChange = (event) => {
        const {name,value,type,checked} = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name,valueToUse);
    };

    return (
        <form className="form container" onSubmit={onSubmit}>
            <div className="form-group submit"> 
                <h4>Information About YOU</h4>
                <label>Name
                <input
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={onChange}
                    placeholder="Enter Here"
                />
                </label>
                <label>Email  
                <input
                    type="email"
                    name="password"
                    value={values.email}
                    onChange={onChange}
                    placeholder="Enter email"
                />
                </label>
                <label>Password  
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onChange}
                    placeholder="Enter Password"
                />
                </label>
                <label>Terms of Service
                <input
                    type="checkbox"
                    name="ToS"
                    checked="values.ToS"
                    onChange={onChange}
                    checked={values.ToS}    
                    />
                </label>
                <button disabled={disabled}>Submit</button>
            
            </div>
        </form>
    )

}