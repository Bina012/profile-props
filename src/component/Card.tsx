
type ProfileProps = {
    profile: {
        name: string
        bio: string
        profession: string
        img: string
        id: number
    }[];

    onDelete: (id: number) => void;
}


const Card = (props: ProfileProps) => {
    return (
        <>
            <div className="profile">
                {props.profile.map((p) => (
                    <div className="profile-preview" key={p.id}>
                        <img src={p.img} alt="profile"></img>
                        <h3>{p.name}</h3>
                        <p>{p.bio}</p>
                        <p>{p.profession}</p>
                        <button onClick={() => props.onDelete(p.id)}>Delete</button>
                    </div>
                ))}
                
            </div>
            
        </>

    )
}


export default Card;