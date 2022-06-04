import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Jobs = () => {
    const [data, setData] = useState({
        jobs: []
    })

    useEffect(() => {
        axios.get('https://refertest.pythonanywhere.com/job/openings')
        .then( res => {
            let jobData = res.data.data
            setData({jobs: jobData})
            // console.log(jobData[0])
        })
    }, [])
    return (
        <div className="jobContainer">
            <h1 className='title'>Jobs matching your preferences</h1>
            {data.jobs.map( (item, key) => {
                return(
                    <div key={key} className="jobOption">
                        <h2 className='cName'>{item.company}</h2>
                        <h3 className="designation">{item.designation}</h3>
                        <p><b>Location: </b>  {item.location}</p>
                        <p><b>Experience: </b>  {item.min_experience === 0 ? 'Fresher' : item.min_experience}</p>
                        <p><b>Skill required</b>  {item.skills.map((skill, key) => {
                            return(
                                <ul key={key}>
                                    <li>{skill}</li>
                                </ul>
                            )
                        })}</p>

                    </div>
                )
            })}
        </div>
    )
}

export default Jobs