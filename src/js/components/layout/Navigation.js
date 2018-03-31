import React from "react";
import { Link, withRouter } from "react-router-dom" 

class Navigation extends React.Component {
    constructor() {
        super();
        this.state = { 
            collapsed: true,
        };
    }
    toggleCollapsed() {
        const collapsed = !this.state.collapsed;
        this.setState({collapsed});
    }
    render() {   
        console.log(this.props);
        const { location } = this.props;
        const { collapsed } = this.state;

        const featuredClass = location.pathname === "/" ? "active" : location.pathname.match(/^\/todos/) ? "active" : "";
        const archivesClass = location.pathname.match(/^\/favourites/) ? "active" : "";
        const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";

        return(
            <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
                <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" onClick={this.toggleCollapsed.bind(this)} >
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                </div>
                <div class={navClass + " navbar-collapse"} id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">                                                
                        <li class={featuredClass}>
                            <Link to="/todos" onClick={this.toggleCollapsed.bind(this)}>Todos</Link>
                        </li>
                        <li class={archivesClass}>
                            <Link to="/favourites" onClick={this.toggleCollapsed.bind(this)}>Favourites</Link>
                        </li>
                        <li class={settingsClass}>
                            <Link to="/settings" onClick={this.toggleCollapsed.bind(this)}>Settings</Link>
                        </li>
               
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
export default withRouter(Navigation);