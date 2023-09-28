import { useEffect, useState } from "react";


interface Users{
    name: string,
    email: string,
    photo: string
    nation: string,
}

export const UsersData = () => {
    const [data, setData] = useState<Users[]>([]);
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=3")
        .then(response => {return response.json()}).then(data => {
        const mapUsers = data.results.map((result: any) => ({
                name: `${result.name.first} ${result.name.last}`,
                email: result.email,
                photo: result.picture.large,
                nation: result.nat,
            }));
        setData(mapUsers)
    })
    }, []);
    return (
        <div>
            <h1>Data</h1>
            {data.map((user, index) => (
                <div key={index}>
                    <p>Nombre: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Foto de Perfil:</p>
                    <img src={user.photo} alt={`Foto de ${user.name}`} />
                    <p>País: {user.nation}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
};