import React from 'react'
import ReactDOM from 'react-dom'
import { DefaultApi } from '../typescript-axios/api/default-api';

const App = () => {
    const api = new DefaultApi();
    (async () => {
        const data = await api.fetchData();
        console.log(data);
    })()
    
    return (
        <h1>Laravel SPA</h1>
    )
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
)