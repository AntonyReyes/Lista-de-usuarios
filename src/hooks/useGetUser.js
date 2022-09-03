import axios from "axios"
import { useEffect, useState } from "react"

const useGetUser = (URL = '') => {

    const [users, setUsers] = useState()

    const getAllUser = () => {
        axios.get(URL)
        .then(res => setUsers(res.data))
        .catch(err => console.log("La URL es invalida"))
    }

 useEffect(() => {
    getAllUser()
 },[])

 return {getAllUser, users}

}

export default useGetUser