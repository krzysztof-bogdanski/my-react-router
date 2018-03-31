import React from "react";
import { Route } from "react-router-dom" 

import Navigation from "./Navigation";
import Footer from "./Footer";
import Todos from "../../pages/Todos";
import Favourites from "../../pages/Favourites";
import Settings from "../../pages/Settings";

export default class Layout extends React.Component
{   
   render() {
       const {location} = this.props;
       const containerStyle = {
           marginTop: "60px"
       }
       return(                             
            <div>                   
                <Navigation location={location}/>                  
                <div class="container" style={containerStyle}>    
                    <div class="row">
                        <div class="col-lg-12">
                            <Route exact path="/" component={Todos}/>
                            <Route path='/todos' component={Todos} />
                            <Route path='/favourites' component={Favourites} />
                            <Route path='/settings' component={Settings} />
                        </div>
                    </div>
                    <Footer />
                </div>                    
            </div>
       )       
   }
}
