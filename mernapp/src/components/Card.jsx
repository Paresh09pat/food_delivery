import React from 'react'

export default function Card() {
    return (

        <div>
            <div className="card mt-3 " style={{ "width": "18rem", 'maxHeight': '360px' }}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGjp55wI4CTAg9j50isN2J4BQ4FWJQYFDDw&usqp=CAU" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some important text.</p>
                    <div className='container w-100'>
                        <select className='m-2 h-100 bg-success rounded'>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>

                        <select className='m-2 h-100 bg-success rounded'>
                            <option value='half'>Half</option>
                            <option value='full'>Full</option>
                        </select>

                    </div>
                </div>
            </div>
        </div>

    )
}
