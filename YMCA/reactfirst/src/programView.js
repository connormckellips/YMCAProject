import React, {useEffect, useState} from 'react';
import { fetchClasses } from './api';

function ProgramView() {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
        const getClasses = async () => {
            try {
                const data = await fetchClasses();
                setClasses(data);
            } catch (error) {
                console.error('Error fetching classes:', error);
            }
        };

        getClasses();
    }, []);
    
    return (
        <div>
            <h1>Classes</h1>
            <ul>
                {classes.map((classItem) => (
                    <li key={classItem.id}>{classItem.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProgramView;