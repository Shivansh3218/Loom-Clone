import React from 'react'
import './header.css'

import { Layout } from 'antd';
import { Button, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom'



function header() {
    const { Header } = Layout;
    const navigate = useNavigate()
    const handleNavigate = (route) => {
        navigate(`${route}`)
    }
    const items = [
        {
            key: '1',
            label: (
                <p onClick={()=> handleNavigate("about")}>
                    Know About Loom
                </p>
            ),
        },
        {
            key: '2',
            label: (
                <p onClick={()=> handleNavigate("usedCase")}>
                    What are  Used Cases?
                </p>
            ),
        },
        {
            key: '3',
            label: (

                <p onClick={()=> handleNavigate("userGuide")} >
                    How to Use Loom?
                </p>
            ),
        },
    ];

    return (
        <>
            <Header id='header_container' >

                <img id='head-logo' src="https://logowik.com/content/uploads/images/loom9320.jpg" alt="loom logo" />

                <div id="header-nav">
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottom"
                        arrow
                    >
                        <a>Product</a>
                    </Dropdown>
                    <a >Blogs</a>
                    
                    <Button type="primary" onClick={()=> handleNavigate("/login")}>Log In</Button>
                    <Button type="primary">Sign Up</Button>
                    <Button>Contact Support</Button>
                </div>
            </Header>



        </>
    )
}

export default header