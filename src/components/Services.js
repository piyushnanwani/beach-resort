import React,  {Component} from "react";
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} 
from "react-icons/fa";
import Title from './Title';
export default class Services extends
Component{
    state = {
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"This is the info of This is the info of.Okay cocktail"
                
            },
            {
                icon:<FaHiking/>,
                title:"Endless hiking",
                info:"This is the info of This is the info of.Okay cocktail"

            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:"This is the info of This is the info of.Okay cocktail"

            },
            {
                icon:<FaBeer/>,
                title:"Strongest beer",
                info:"This is the info of This is the info of.Okay cocktail"

            },

        ]
    }
    render(){
        return(
            <section className="services">
                
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index)=>{
                        return (<article key={index} className="service">
                            <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                        </article>
                        );
                    })}
                </div>
                </section>
        );
    }
}