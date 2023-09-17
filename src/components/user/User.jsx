import { useSelector } from "react-redux";
import { useActions } from "../../hooks/useActions";

const User = () => {

    const {isLoading, error, user} = useSelector(state => state.user)

    const {getUserById, getIserByName} = useActions()



return (
    <div>
        <button className="btn" onClick={() => getUserById(1)}>Get User</button>
        {isLoading ? <div>Loading...</div> : error ? <div>{error.message}</div> : user?.name ?  <h1>User: {user.name}</h1> : <div><h1>USER NOT FOUND</h1></div>}
    </div>
)
}

export default User;
