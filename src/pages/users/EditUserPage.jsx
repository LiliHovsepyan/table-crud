import axios from "axios";
import {useState, useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";


const EditUserPage = () => {

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=> {
        loadUser();
    },[]);

    const loadUser = async () => {
        const response =  await axios.get('http://localhost:3000/users/' + id);
        setUser(response.data);
    }

    const onInputChange = e => {
        console.log(e.target.value);
        console.log(e.target.name);
        setUser({...user, [e.target.name]: [e.target.value]});
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);
        await axios.put('http://localhost:3000/users/' +id, user);
        // put-ov poxvac tvyalner@ tara dreci backi mej
        navigate('/');   //navigateov tanum enq nor ej
    }

    return (
        <div className="EditUserPage">
            <h2>EDIT USER</h2>
            <form onSubmit={onSubmit}>
                <div>
                    Name: <input type="text" name="name" value={user.name} onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    UserName: <input type="text" name="username" value={user.username} onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    Email: <input type="text" name="email" value={user.email} onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    Phone: <input type="text" name="phone" value={user.phone} onChange={e => onInputChange(e)}/>
                </div>
                <div>
                    Website: <input type="text" name="website" value={user.website} onChange={e => onInputChange(e)}/>
                </div>
                <input type="submit" value="SAVE"/>
            </form>
        </div>
    );
}

export default EditUserPage;
