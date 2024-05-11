import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
interface IUser  {
    id : number,
    name : string,
    username : string,
    email : string,
    

}

function UserTable() {
    const [users, setUsers] = useState<IUser[]>([]);

    const fetchUsers = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataUsers = await res.json();
        setUsers(dataUsers);
        console.log(dataUsers);
    }
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>User Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users?.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                })}


            </tbody>
        </Table>
    );
}

export default UserTable;