import Card from "./Card";


function Profile() {
    const ProfileList = [
        { name: "Sarine Tarbatt", bio: "Barium swallow", profession: "Human Resources Manager", img: "http://dummyimage.com/227x100.png/cc0000/ffffff" },
        { name: "Link Hartle", bio: "2ndry ocular imp insert", profession: "Physical Therapy Assistant", img: "http://dummyimage.com/227x100.png/cc0000/ffffff" },
        { name: "Gael Slorach", bio: "Conjunctivorhinos w tube", profession: "Structural Engineer", img: "http://dummyimage.com/227x100.png/cc0000/ffffff" },
        { name: "Beverlie McElhargy", bio: "Rhinoplasty NEC", profession: "Executive Secretary", img: "http://dummyimage.com/227x100.png/cc0000/ffffff" },
        { name: "Sean Disdel", bio: "Open biliary tract bx", profession: "Software Engineer II", img: "http://dummyimage.com/227x100.png/cc0000/ffffff" }
    ]



    return (
        <div className="home">
            <Card profile={ProfileList} />
        </div>
    )
}

export default Profile;