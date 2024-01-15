type ProfileProps = {
    profile: {
        name: string
        bio: string
        profession: string
        img: string
    }[]
}

const Card = (props: ProfileProps) => {
    return (
        <div className="profile">
            {props.profile.map((p) => (
                <div className="profile-preview">
                    <img src={p.img} alt="images"></img>
                    <h5>{p.name}</h5>
                    <p>{p.bio}</p>
                    <p>{p.profession}</p>
                </div>
            ))}
        </div>
    )
}


export default Card;