import { useEffect, useState } from "react";


interface Users{
    name: string,
    email: string,
    photo: {
        front_default: string
    },
    nation: string,
}

export const UsersData = () => {
    const [data, setData] = useState<Users>({name: '', email: '', photo: {front_default: ''}, nation: ''});
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=3")
        .then(response => {return response.json()}).then(data => {
        setData(data)
        console.log(data)
    })
    }, []);
    return (
        <div>
            <h1>Data</h1>
            <p>{data.name}</p>
            {data.map users=> users.}
        </div>
    );
};