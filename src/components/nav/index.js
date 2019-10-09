import React, { Component } from 'react';
import {Link} from 'react-router-dom'; 
import './nav.less';
import treeData from './../../config';
import { Menu } from 'antd';
const { SubMenu } = Menu;
class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            treeNode: ''
        }
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentWillMount() {
        let nodes = this.renderMenu(treeData);
        this.setState({
            treeNode: nodes
        })
    }

    renderMenu = (data) => {
        return data.map((node)=>{
            // 这是有子菜单的
            if(node.children){
                return <SubMenu key={node.key} title={node.title}>
                        {this.renderMenu(node.children)}
                    </SubMenu>
            }

            // 这是直接返回的
            return (
                <Menu.Item key={node.key}>
                    <Link to={node.key}>{node.title}</Link> 
                </Menu.Item> 
            )
        })
    }
    render() {
        return (
            <div className="nav-left">
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="logo"></img>
                    <h3>React Admin</h3>
                </div>
                <div className="nav-tree">
                    <Menu  mode="inline" theme='dark'
               inlineCollapsed={this.state.collapsed}>
                   {this.state.treeNode}
               </Menu>
                </div>
            </div>
        );
    }
}

export default NavLeft;