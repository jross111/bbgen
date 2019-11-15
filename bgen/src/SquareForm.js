import React, { useState } from 'react';
import { Form, Input } from 'antd';



export function SquareForm({ addSquare }) {

    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value)
            return;
        addSquare(value);
        setValue("");
    };

    return (<Form className="form" onSubmit={handleSubmit}>
        <Input 
            size="large"
            type="text" 
            placeholder="Enter Bingo Text"
            value={value} 
            onChange={e => setValue(e.target.value)} />

    </Form>);
}
