import axios ,{AxiosResponse}  from "axios"

interface Todo{
    userId:number;
    id:number;
    title:string;
    completed:boolean;

}


const fetchData = async () => {
    try {
        const response:AxiosResponse<Todo> = await axios.get("");
        console.log("Todo" , response.data);
    } catch (error:any) {
        // console.log(error.message);

        if(axios.isAxiosError(error)){
            console.log("Axios Error",  error.message);
            if(error.response){
                console.log(error.response.status)
            }

        }
    }
}







axios.get('https://example.com/data')
.then(response =>{
    console.log(response.data)
})
