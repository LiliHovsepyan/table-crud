import axios from "axios";
import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

const UserPage = () => {

    const [user, setUser] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        const response = await axios.get('http://localhost:3000/users/' + id);
        setUser(response.data);
    }

    return (
        <div className="UserPage">
            <button onClick={()=> navigate(-1)}>GO BACK</button>
            <ul>
                <li>User name: {user.name}</li>
                <li>User username: {user.username}</li>
                <li>User email: {user.email}</li>
                <li>User phone: {user.phone}</li>
                <li>User website: {user.website}</li>
            </ul>
        </div>
    );
};

export default UserPage;
