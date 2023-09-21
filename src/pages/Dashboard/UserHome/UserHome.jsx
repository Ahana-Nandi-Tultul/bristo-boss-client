import useAuth from "../../../hooks/useAuth";

const UserHome = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>Welcome to user home, {user?.displayName}</h2>
        </div>
    );
};

export default UserHome;