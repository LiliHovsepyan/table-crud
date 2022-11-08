import axios from "axios";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const AddUserPage = () => {

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    const onInputChange = e => {
        console.log(e.target.value);
        console.log(e.target.name);
        setUser({...user, [e.target.name]: e.target.value});
    }

    const navigate = useNavigate();

    const onSubmit = async(e) => {
        e.preventDefault();
        await axios.post('http://localhost:3000/users', user);
        navigate('/');
    }

    return (
        <div className="AddUserPage">
            <h2>ADD NEW USER</h2>
            <form onSubmit={onSubmit}>
                <div>
                    Name: <input type="text" name="name" value={user.name} onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    UserName: <input type="text" name="username" value={user.username} onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    Email: <input type="Email" name="email" value={user.email} onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    Phone: <input type="number" name="phone" value={user.phone} onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    Website: <input type="text" name="website" value={user.website} onChange={e => onInputChange(e)}/>
                </div>
                <input type="submit" value="ADD NEW USER"/>
            </form>
        </div>
    );
};

export default AddUserPage;
