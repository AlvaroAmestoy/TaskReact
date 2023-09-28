import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Users{
    name: string,
    email: string,
    photo: string
    nation: string,
}

export const GetUsersNation = () => {
    const [data, setData] = useState<Users[]>([]);
    const { regionCode } = useParams<{ regionCode?: string }>();
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=3&nat=${regionCode}`)
        .then(response => response.json())
        .then(data => {
            const mapUsers = data.results.map((result: any) => ({
            name: `${result.name.first} ${result.name.last}`,
            email: result.email,
            photo: result.picture.large,
            nation: result.nat,
            }));
            setData(mapUsers);
        });
    }, [regionCode]);

    if (data.length === 0) {
        return (
            <div>
                <p>Cantidad de usuarios = 0</p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Usuarios de {regionCode}</h1>
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
    }
    
};