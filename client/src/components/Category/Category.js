import React from 'react'


class Category extends React.Component {
    state = {
        data: [],
        dataReady: false,
        // token: this.getCookie('token').split(":")[2].split('}')[0].split('"')[1],
        token: this.getToken()
    }    
        
    getCookie(name){
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    getToken(){
        return RegExp(/Bearer (.*?)"/).exec(this.getCookie('token'))[1]
    }

    componentDidMount() {
        fetch('http://localhost:3000/api/category', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.state.token}`
            },
        })
        .then(res => res.json())
        .then(data => {
            this.setState({
                dataReady: true,
                data
            })
        })
        .catch(err => console.log(err))  
    }

    render() {
        const {data, dataReady} = this.state
        const dataMap = dataReady ? 
            data.map(i => {
                return <h1>{i.name}</h1>
            }) : <h1>loading...</h1>
        return (
            <>
                {dataMap}
                {/* {console.log(this.state.token)} */}
            </>
        )
    }
}

export default Category