import { useEffect, useState } from "react";

interface Users{
    name: string,
    email: string,
    photo: {
        front_default: string
    },
    nation: string,
}

function UsersData(){
    const [data, setData] = useState<Users>({name: '', email: '', photo: {front_default: ''}, nation: ''});
    useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://randomuser.me/api/?nat=br");
            setData(await response.json());
        }
        fetchData();
    }, []);
    return (
        <div>
            <h1>Data</h1>
            <p>{data.name}</p>
        </div>
    );
}

function getParams() {
    const queryParameters = new URLSearchParams(window.location.search)
    const es = queryParameters.get("es")
    const br = queryParameters.get("br")
    const us = queryParameters.get("us")
    return (
        <><p>Nation: {es}</p><p>Nation: {br}</p><p>Nation: {us}</p></>
    )
}

function GetUsersNation() {
    return (
        <>
            <h1>Personas con nacionalidad: </h1>
            {getParams()}
            {UsersData()}
        </>
    )
}

export default GetUsersNation