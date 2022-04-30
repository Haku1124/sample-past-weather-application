import React from 'react';

const TableHead: React.FC = () => {
    return (
        <thead>
            <tr>
            <th></th>
            <th>Weather</th>
            <th>Max temp</th>
            <th>Min temp</th>
            <th>Wind</th>
            <th>pressure</th>
            </tr>
        </thead>
    )
}

export default TableHead