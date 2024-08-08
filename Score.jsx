import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export function Score() {
    const { id } = useParams();
    const [score, setScore] = useState(null);

    useEffect(() => {
        async function get_score() {
            try {
                const response = await axios.get(`http://127.0.0.1:5000/studient/dashbored/Results?id=${id}`);
                setScore(response.data.score);
            } catch (error) {
                console.error('Error:', error);
            }
        }

        get_score();
    }, [id]); // Call get_score() whenever the id changes

    return (
        <>
            <div className="border">
                <table className='table'>
                    <thead>
                        <tr>
                            <th className='me-5 pe-5'>Student ID</th>
                            <th className='me-5 pe-5'>Status</th>
                            <th className='ms-5 ps-5'>Student Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='me-5 pe-5'>{id}</td>
                            <td className='ms-5 ps-5'>{score}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}
