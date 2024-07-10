import axios from "axios";
import { useState, useEffect } from "react";
import io from 'socket.io-client';

export function Control() {

    const [studientData, setStudientData] = useState([]);

    function base64_to_image(image) {
        let img = new Image();
        img.src = image;
        return img;
    }

    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get('http://127.0.0.1:5000/admin/get/violations');
                const data = response.data;
                console.log(data);
                setStudientData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        getData();
    }, []);

    return (
        <section className="border-3 form-control mt-5">
            <table className="table">
                <thead>
                    <tr>
                        <td>Student Id</td>
                        <td>Frame</td>
                        <td>Frame Problem</td>
                    </tr>
                </thead>

                <tbody>
                    {studientData.map((element, index) => (
                        <tr key={index}>
                            <td>{element.Student_id}</td>
                            <td><img className="w-25 ms-5"  src={element.image} alt="Frame" /></td>
                            <td>{element.Violation_type}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
