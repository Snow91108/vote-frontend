import React from 'react';
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Child3 from './components/Child3';

function Parent() {
    const user = { name: "ram", age: 23 };

    return (
        <div>
            <Child1 user={user} />
            <Child2 user={user} />
            <Child3 user={user} />
        </div>
    );
}

export default Parent;
