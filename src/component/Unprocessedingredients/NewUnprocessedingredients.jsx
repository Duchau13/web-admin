import React from "react";
import classes from './UnprocessedingredientsDetail.module.css'
import Input from "../Input/Input";
import { Link } from "react-router-dom";
//import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import { useParams } from "react-router-dom";
import { useState } from "react";
import api from "../../redux/axois"
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


const NewUnprocessedingredients = () => {

    const token = localStorage.getItem('token')
    const [items,setItems] = useState({
        name: "",
        unit:"",
    })
    const navigate = useNavigate();
    //const {id} = useParams();
    const [error, setError] = useState("")


    
    console.log(items);
    //console.log(items[0]);
    


    const handleSubmit = (e) =>{
        e.preventDefault();

        try{
        {
            api.post('unprocessedingredients/create', items,
                {
                    headers: {
                        Access_token: token,
                    }
                }
            )
            .then(res =>{
                toast.success('Thêm Mới Thành Công', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                setTimeout(() => {
                    navigate('/unprocessedingredients')
                }, 2000);
            })
            .catch(err =>{
                toast.success('Thêm Mới Thất Bại', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
        }
        
        }catch(error){
            console.log(error.response.data);
        }
        
    }
    console.log(error)
    const handleChange = (e) => {
        
        const itemsClone = {...items};
        itemsClone[e.target.name] = e.target.value;
        setItems(itemsClone);
    
    }

    console.log(items)

    return (
        <div>
            <Link to="/unprocessedingredients   " className={classes["back-icon"]}>
                <i class="fa-solid fa-chevron-left"></i>
                <h>Quay lai</h>
            </Link>
            <div className={classes["container"]}>
                <div className={classes["form-main"]}>
                    <h1>Thêm mới nguyên liệu thô</h1>
                    <p className={classes["text-err"]}>{error}</p>
                    <form action="" className={classes["add-form"]}>
                        
                        <Input
                            name="name"
                            label="Tên thức ăn"
                            placeholder="Nhập tên thức ăn"
                            required={true}
                            onChange={handleChange}
                        />
                        <Input
                            type="text"
                            name="unit"
                            label="đơn vị"
                            placeholder="đơn vị"
                            required={true}
                            onChange={handleChange}
                        />
                        {/* <Input
                            name="image"
                            label="Ảnh"
                            placeholder="Nhập đường dẫn hình ảnh"
                            required={true}
                            value={items.image}
                            onChange={handleChange}
                        /> */}
                        <button className={classes['button-submit']}
                                onClick={handleSubmit}
                        >
                            Thêm mới
                        </button>
                    </form>
                       
                </div>
            </div>
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
};
export default NewUnprocessedingredients;