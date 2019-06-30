import React, {Component} from 'react';

import  {Link}  from "react-router-dom";

const axios = require('axios');

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            list:[],
            domain:'http://a.itying.com/'
         };
    }
    requestData = ()=> {
        var api =  this.state.domain + 'api/productlist'
        axios.get(api).then((response) => {
            this.setState({
                list: response.data.result
            })
        }).catch((err) => {
            console.log(err)
        })
    }

    componentDidMount(){
        this.requestData();
    }
    render() {
        return (
            <div>
                首页组件    
                <div className='content'>
                    {
                        this.state.list.map((value, index) => {
                            return (
                                <div key={index} className='item'>
                                    <h2 className='item_cate'>{value.title}</h2>
                                    <ul className='item_list'>
                                    {
                                        value.list.map((v, key) => {
                                            return (
                                                <li key = {key}>
                                                    <Link to={`/Pcontentent/${v._id}`}>
                                                    <div className='inner'>
                                                       <img src={`${this.state.domain}${v.img_url}`} alt={v.title} />    
                                                        <p className="title">{v.title}</p>
                                                        <p className="price">{v.price}</p>
                                                    </div>
                                                    </Link>
                                                </li>
                                                
                                            )
                                        })
                                    }
                                    </ul>    
                                </div>     
                                
                            )
                        } )
                    }    
                </div>            
            </div>
        );
    }
}

export default Home;