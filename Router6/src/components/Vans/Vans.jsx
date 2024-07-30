import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function Vans() {

    const [vans, setVans] = useState([])
    useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link 
                to={`/vans/${van.id}`}
                aria-label={`View details for ${van.name}, a ${van.type} van
                        priced at $${van.price}  to rent per day`}            
            >
                <img src={van.imageUrl} alt={`Image of ${van.name}`}/>
            </Link>
                <div className="van-info" >
                    <p>{van.name}</p>
                    <p>${van.price}<span>/day</span></p>
                </div>
        </div>
    ))

    return (
        <div className="van-list-container">
            <h1>Click To Explore Our Van Options</h1>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}