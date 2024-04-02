interface ParamsType {
    id: number;
}

interface PropsType {
    params: ParamsType;
}


const UserProfilePage = (params: PropsType) => {
    return (
        <div>UserProfile Page | Welcome user id : {params.params.id}</div>
    )
}

export default UserProfilePage