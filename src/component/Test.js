import React from "react"
import './style.scss'

const MenuItem = [
    {
        name:'Resources',
        id:'1',
    },
    {
        name:'Pricing',
        id:'2'
    },
    {
        name:'Features',
        id:'3'
    },
    {
        name:'Business Types',
        id:'4'
    },
    {
        name:'EnterPrise',
        id:'5',
    }
]
const Test = () => {

    return (
        <div className="Header">
          <div className="Navbar">
            <div className="LoginItem">
                <div className="LogIn">LogIn</div>
                <div className="Demo">Demo & Pricing</div>
            </div>
            <div className="MenuItem">
                {
                    MenuItem.map(item => <p>{item.name}</p>)
                }
            </div>
            <div className="Logo">
                <img src="/img/logome.svg"/>
            </div>
          </div>
        </div>
    )
}


export default Test ;