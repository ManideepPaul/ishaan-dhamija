import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Jobs = () => {
    const [data, setData] = useState({
        jobs: []
    })

    useEffect(() => {
        axios.get('http://refertest.pythonanywhere.com/job/openings')
        .then( res => {
            let jobData = res.data.data
            setData({jobs: jobData})
            // console.log(jobData[0])
        })
    }, [])
    return (
        <div className="jobContainer">
            {/* <h1>{data}</h1> */}
            {data.jobs.map( (item, key) => {
                return(
                    <p key={key}>{item.company}</p>
                )
            })}
        </div>
    )
}

export default Jobs