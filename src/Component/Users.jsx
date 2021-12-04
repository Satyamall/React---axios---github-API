import {useState } from "react";
import Search from "./Search";
import axios from "axios";
import Card from "./Card";

export default function Users(){

    const [data,setData]=useState([]);

    const getUsers=(query)=>{
        return axios.get(`https://api.github.com/search/users?q=${query}`)
    }
   
    const handleTask=(query)=>{
        getUsers(query)
        .then((res)=>{
            setData(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    console.log(data)

    return (
        <div>
            <Search onTask={handleTask}/>
            {
                data?.items?.map((item)=>{
                    return <Card 
                        key={item.id}
                        id={item.id}
                        name={item.login}
                        url={item.url}
                        avatar={item.avatar_url}
                    />
                })
            }
        </div>
    )
}