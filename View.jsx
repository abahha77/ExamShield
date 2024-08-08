import axios from "axios"
import { useState, useEffect } from "react"

export function View() {

    const [results, setResults] = useState([])
    const [info, setInfo] = useState([])

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('http://127.0.0.1:5000/Admin/dashbored/Results')
                const data = response.data

                console.log(data)

                setResults(data.data)
                setInfo(data.studientData)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }

        getData()
    }, []) // Empty dependency array ensures that this effect runs only once, similar to componentDidMount

    return (
        <div className="border-3 form-control mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>Studient Id</th>
                        <th>First Name</th>
                        <th>Second Name</th>
                        <th>Email</th>
                        <th>Score</th>
                    </tr>
                </thead>

                <tbody>
                    {info.map((studient, index) => (
                        <tr key={index}> {/* Add a unique key for each table row */}
                            <td>{results[index].studient_id}</td> {/* Access correct element from results array */}
                            <td>{studient.fname}</td>
                            <td>{studient.lname}</td>
                            <td>{studient.email}</td>
                            <td>{results[index].exam_score}</td> {/* Access correct element from results array */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
