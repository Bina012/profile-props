import Card from "./Card";
import { useState } from "react";


function Profile() {
    const [inputValue,setInputValue] = useState([
        { id : 1 , name: "Sarine Tarbatt", bio: "Barium swallow", profession: "Human Resources Manager", img: "http://dummyimage.com/227x100.png/cc0000/ffffff" },
        { id : 2, name: "Link Hartle", bio: "2ndry ocular imp insert", profession: "Physical Therapy Assistant", img: "http://dummyimage.com/227x100.png/cc0000/ffffff" },
        { id : 3, name: "Gael Slorach", bio: "Conjunctivorhinos w tube", profession: "Structural Engineer", img: "http://dummyimage.com/227x100.png/cc0000/ffffff" },
        { id : 4, name: "Beverlie McElhargy", bio: "Rhinoplasty NEC", profession: "Executive Secretary", img: "http://dummyimage.com/227x100.png/cc0000/ffffff" },
        { id : 5, name: "Sean Disdel", bio: "Open biliary tract bx", profession: "Software Engineer II", img: "http://dummyimage.com/227x100.png/cc0000/ffffff" }
    ]);

 
    const handleDelete = (id: number) => {
        const newValue = inputValue.filter((val) => val.id !== id);
        setInputValue(newValue);
    }

    return (
        <div className="home">
            <Card profile={inputValue} onDelete={handleDelete}/>
        </div>
    )
}

export default Profile;