import React from 'react'
import "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Table({ list, colNames, width = "auto", height = "auto" }) {
    return (

        <div>
            <table cellSpacing="30" className='table'>
                <thead>
                    <tr className='table-dark'>{colNames.map((headerItem, index) => (
                        <th key={index}>{headerItem.toUpperCase()}</th>))}
                    </tr>
                </thead>
                <tbody>{Object.values(list).map((obj, index) => (
                    <tr key={index}>{Object.values(obj).map((values, index2) => (<td key={index2}>{values}</td>))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>

    )
}
