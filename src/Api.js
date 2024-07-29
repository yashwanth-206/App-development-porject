import axios from 'axios';

const API_URL = 'http://localhost:3001';


export const getData = async() => {
    return await axios.get(`${API_URL}/UserData`);
}

export const postData = async(Username, Email, Password, Conpassword, uRole) => {
    const { data: edata } = await getData();

    const newid = Math.max(...edata.map(user => user.id), 0) + 1;
    
    const newdata = {
        id: newid,
        Username: Username,
        Email: Email,
        Password: Password,
        ConfirmPassword: Conpassword,
        Role: uRole,
        cart: []
    };
    
    await axios.post(`${API_URL}/UserData`, newdata);
}

export const addCart = async(userId, updatedCart) => {
    const { data: user } = await axios.get(`${API_URL}/UserData/${userId}`);
    user.cart = updatedCart;
    return axios.put(`${API_URL}/UserData/${userId}`, user);
};

//employee json concept
export const getEmployeeData=async()=>{
    return await axios.get(`${API_URL}/employees`);
}

export const postEmployeeData = async(name,position,salary)=>{
    const { data: employee } = await getEmployeeData();
    
    
    const empnewid = Math.max(...employee.map(user => user.id), 0) + 1;

    const newempdata = {
        id: newid,
        Name:name,
        Position:position,
        Salary:salary
    };
    
    await axios.post(`${API_URL}/employees`, newempdata);
}