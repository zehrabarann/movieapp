import { useEffect, useState } from "react"


const Header = (property) => {
    const [name, setName] = useState('Zehra')
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        console.log(name)

        return (() => {
            console.log("zehra3")
        })
    }, [name])


    const onChange = (e) => {
        setName(e.target.value)
        console.log(e.target.value);
        
    }

    const onClick = () => {
        setLoading(true)

    }


    return (
        <>
            <input onChange={onChange} />
            {property.children}
            {property.name}
            <div>
                {loading ? "Zehra" : <span>Önder</span>}
            </div>
            <button onClick={onClick}>Tıkla</button>
            <div>{name}</div>
        </>
    )

}

export default Header