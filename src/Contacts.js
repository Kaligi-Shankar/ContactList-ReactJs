import React, {useState} from 'react'

const Contacts = ({ contactlist, deleteHandler, editHandler }) => {
    const [edit, setEdit] = useState({
        name:'',
        email:''
    })
    // const { name, username, email } = contactlist;
   

    return (
        <div>
            <center>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">S. No.</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">E-Mail</th>
                            <th scope="col">Edit/Delete</th>
                        </tr>

                    </thead>
                </table>
                {
                    contactlist.map((contact, index) =>
                        <div key={index}>
                            <>{
                            edit === index?
                                <div>
                                <input type="text" name="name" defaultValue={contact.name} onChange={(e) => editHandler(e, index)}/>
                                
                                <button className='update' onClick={() => setEdit()}> Submit </button>
                            </div>
                            
                            
                            :
                        
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <th scope="row">{index+1}</th>
                                        <td >{contact.name}</td>
                                        <td >{contact.email}</td>
                                        <button class="btn btn-outline-primary" onClick={()=>setEdit(index)}>Edit</button>
                                        <button class="btn btn-outline-danger" onClick={()=>deleteHandler(index)}>Delete</button>
                                    </tr>
                                </tbody>
                            </table>
                            }</>
                        </div>
                    
                    )
                }
            </center>

        </div>
    )
}

export default Contacts
